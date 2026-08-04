import { SelectProps as DefaultSelectProps } from '@mui/material/Select';
import { FormHelperTextProps } from '@mui/material/FormHelperText';
import { IconProps } from '../../internal/Icon';
import { TextFieldCustomLabelProps } from '../../TextField/model/TextFieldCustomLabelProps';

export type SelectProps<Value = unknown> = DefaultSelectProps<Value> & {
  disabled?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  prefix?: string;
  required?: boolean;
  startIcon?: IconProps['icon'];
  suffix?: string;
  tooltipLabel?: string;
  overrides?: {
    label?: TextFieldCustomLabelProps;
    helperText?: FormHelperTextProps;
  };
};
