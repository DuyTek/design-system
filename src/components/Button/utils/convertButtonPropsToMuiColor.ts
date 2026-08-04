import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { ButtonProps } from '../model/ButtonProps';

function convertButtonPropsToMuiColor({
  color,
  negative,
  neutral,
  positive,
  variant,
}: Pick<
  ButtonProps,
  'color' | 'negative' | 'neutral' | 'positive' | 'variant'
>): MuiButtonProps['color'] {
  if (negative === true) {
    switch (variant) {
      case 'contained':
        return 'red400';
      case 'outlined':
        return 'red900';
      default:
        return 'red300';
    }
  }

  if (neutral === true) {
    switch (variant) {
      case 'contained':
        return 'textdark600';
      case 'outlined':
        return 'bglight900';
      default:
        return 'textdark600';
    }
  }

  if (positive === true) {
    switch (variant) {
      case 'contained':
        return 'blue500';
      case 'outlined':
        return 'blue400';
      default:
        return 'bluelight800';
    }
  }

  return color;
}

export default convertButtonPropsToMuiColor;
