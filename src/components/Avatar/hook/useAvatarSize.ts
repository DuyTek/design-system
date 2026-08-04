import { Theme } from '@mui/material';
import { CSSProperties } from 'react';
import { AvatarProps, AvatarSize } from '../model';

type SizeMapType = {
  root: CSSProperties;
  square: CSSProperties;
  noSecondaryText?: CSSProperties;
};

export const useAvatarSizeStyles = ({
  size,
  secondaryText,
  theme,
}: {
  size: string | undefined;
  secondaryText: AvatarProps['secondaryText'];
  theme: Theme;
}): SizeMapType => {
  const sizeMap: Record<AvatarSize, SizeMapType> = {
    extraSmall: {
      root: { ...theme.sys.typo2.tiny, width: 16, height: 16 },
      square: { borderRadius: theme.ref.border.radius.sharp },
    },
    small: {
      root: { ...theme.sys.typo2.body.medium, width: 36, height: 36 },
      square: { borderRadius: theme.ref.border.radius.sharp },
      noSecondaryText: { ...theme.sys.typo2.body.small, width: 20, height: 20 },
    },
    medium: {
      root: { ...theme.sys.typo2.body.large, width: 44, height: 44 },
      square: { borderRadius: theme.ref.border.radius.moderate },
      noSecondaryText: { ...theme.sys.typo2.body.small, width: 24, height: 24 },
    },
    large: {
      root: { ...theme.sys.typo2.title.medium, width: 44, height: 44 },
      square: { borderRadius: theme.ref.border.radius.moderate },
      noSecondaryText: { ...theme.sys.typo2.body.small, width: 24, height: 24 },
    },
    extraLarge: {
      root: { ...theme.sys.typo2.headline, width: 72, height: 72 },
      square: { borderRadius: theme.ref.border.radius.moderate },
      noSecondaryText: {
        ...theme.sys.typo2.title.medium,
        width: 40,
        height: 40,
      },
    },
    userProfile: {
      root: { ...theme.sys.typo2.title.medium, width: 32, height: 32 },
      square: {},
    },
    accountProfile: {
      root: { ...theme.sys.typo2.display, width: 128, height: 128 },
      square: {},
    },
  };

  if (!size) {
    const { root, square } = sizeMap.small;
    return { root, square };
  }

  const config = sizeMap[size as AvatarSize];

  const root =
    config.noSecondaryText && !secondaryText ?
      config.noSecondaryText
      : config.root;
  const { square } = config;

  return { root, square };
};
