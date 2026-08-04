import { styled } from '@mui/material';
import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AvatarSize } from '../model';
import Icon, { IconProps } from '../../internal/Icon';

const IconSizes: Record<
  AvatarSize,
  {
    default: { width: string; height: string };
    noSecondary: { width: string; height: string };
  }
> = {
  extraSmall: {
    default: { width: '8px', height: '8px' },
    noSecondary: { width: '8px', height: '8px' },
  },
  small: {
    default: { width: '22px', height: '22px' },
    noSecondary: { width: '12px', height: '12px' },
  },
  medium: {
    default: { width: '22px', height: '22px' },
    noSecondary: { width: '14px', height: '14px' },
  },
  large: {
    default: { width: '22px', height: '22px' },
    noSecondary: { width: '14px', height: '14px' },
  },
  extraLarge: {
    default: { width: '40px', height: '40px' },
    noSecondary: { width: '24px', height: '24px' },
  },
  // Special sizes
  userProfile: {
    default: { width: '16px', height: '16px' },
    noSecondary: { width: '16px', height: '16px' },
  },
  accountProfile: {
    default: { width: '68px', height: '68px' },
    noSecondary: { width: '72px', height: '72px' },
  },
};

export const FallbackIcon = styled(
  ({
    avatarSize,
    hasSecondaryText,
    ...rest
  }: IconProps & { avatarSize: AvatarSize; hasSecondaryText?: boolean }) => (
    <Icon icon={faUser} {...rest} size={undefined} />
  ),
)(({ theme, avatarSize, hasSecondaryText }) => ({
  color: theme.refV2.pri.blue[400],
  ...(hasSecondaryText ?
    { ...IconSizes[avatarSize].default }
    : { ...IconSizes[avatarSize].noSecondary }),
}));
