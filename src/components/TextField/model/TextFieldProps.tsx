import { TextFieldProps as DefaultTextFieldProps } from '@mui/material/TextField';
import { ButtonProps } from '../../Button';
import { IconProps } from '../../internal/Icon';
import { TextFieldCustomLabelProps } from './TextFieldCustomLabelProps';

export type TextFieldProps = Omit<
  DefaultTextFieldProps,
  'onChange' | 'InputLabelProps'
> & {
  prefix?: string;
  suffix?: string;
  startIcon?: IconProps['icon'];
  LabelProps?: TextFieldCustomLabelProps;
  onChange?: (value: string) => void;
  onChangeMui?: DefaultTextFieldProps['onChange'];
  overrides?: {
    clearButton?: ButtonProps;
    showPasswordButton?: ButtonProps;
  };
  tooltipLabel?: string;
  disabledClearInput?: boolean;
};
