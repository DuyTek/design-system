import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { IconProps } from '../../internal/Icon';

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  icon?: IconProps['icon'];
  negative?: boolean;
  neutral?: boolean;
  positive?: boolean;
  /**
   * @description The "large" size is deprecated and will be removed in a future version.
   * Please use "medium" instead.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}
