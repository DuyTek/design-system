import { FormControlLabelProps } from '@mui/material';
import { SwitchProps as MUISwitchProps } from '@mui/material/Switch';

export type SwitchProps = Omit<MUISwitchProps, 'ref'> & {
  LabelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
  label?: string;
  fullWidth?: boolean;
};
