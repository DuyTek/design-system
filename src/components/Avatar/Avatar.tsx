import React, { useMemo } from 'react';
import MUIAvatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { AvatarProps, AvatarSize } from './model';
import { CustomLabel } from './components';
import { useAvatarSizeStyles } from './hook/useAvatarSize';
import { FallbackIcon } from './components/FallbackIcon';
import { brandAvatarClasses } from './classes';

export const AvatarContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

function getCapitalLetters(
  size: AvatarSize,
  displayText?: string,
  hasSecondary?: boolean,
): string | undefined {
  let sliceDirection: number;

  if (
    size === 'extraSmall' ||
    size === 'userProfile' ||
    ((size === 'small' || size === 'medium' || size === 'large') &&
      !hasSecondary)
  ) {
    sliceDirection = 1;
  } else {
    sliceDirection = 2;
  }

  if (displayText) {
    return displayText
      .split(' ')
      .slice(0, sliceDirection)
      .map((word) => word[0]?.toUpperCase())
      .join('');
  }
  return undefined;
}

const MuiAvatar = styled(
  ({
    secondaryText,
    ...props
  }: AvatarProps & {
    secondaryText?: AvatarProps['secondaryText'];
  }) => <MUIAvatar {...props} />,
)(({ theme, sizes, secondaryText }) => {
  const { root: rootStyles, square: squareStyles } = useAvatarSizeStyles({
    size: sizes,
    secondaryText,
    theme,
  });

  return {
    '&.MuiAvatar-root': {
      ...rootStyles,
      border: theme.sys.border.solid,
      borderColor: theme.sys.color.on_surface.border_data_display,
      backgroundColor: theme.sys.color.secondary_bold,
      color: theme.sys.color.on_secondary.variant.default,
    },
    '&.MuiAvatar-square': {
      ...squareStyles,
    },
  };
});

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      disableTextFallback = false,
      primaryText,
      secondaryText,
      shape = 'circular',
      showLabel,
      size = 'medium',
      src = '',
      ...props
    },
    ref,
  ) => {
    const displayText = primaryText ?? secondaryText;
    const hasSecondaryText = Boolean(secondaryText);
    const capitalLetters = useMemo(
      () => getCapitalLetters(size, displayText, hasSecondaryText),
      [size, displayText, hasSecondaryText],
    );

    return (
      <AvatarContainer className={brandAvatarClasses.container}>
        <MuiAvatar
          secondaryText={secondaryText}
          ref={ref}
          sizes={size}
          src={src}
          {...props}
          variant={shape}
        >
          {(!disableTextFallback && capitalLetters) || (
            <FallbackIcon
              avatarSize={size}
              hasSecondaryText={hasSecondaryText}
            />
          )}
        </MuiAvatar>
        {showLabel ? (
          <CustomLabel
            primaryText={displayText}
            secondaryText={secondaryText}
            size={size}
          />
        ) : null}
      </AvatarContainer>
    );
  },
);

export default Avatar;
