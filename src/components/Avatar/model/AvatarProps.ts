import React from 'react';
import { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';

export type AvatarSize =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | 'userProfile'
  | 'accountProfile';
/**
 * Represents the properties for the Avatar component.
 */
export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  disableTextFallback?: boolean;
  src?: string;
  size?: AvatarSize;
  shape?: 'circular' | 'square';
  showLabel?: boolean;
  primaryText?: string;
  secondaryText?: string;
} & Omit<MuiAvatarProps, 'src'>;
