import { FormControlLabelProps } from '@mui/material';
import { CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox/Checkbox';

export type CheckboxProps = Omit<MUICheckboxProps, 'ref'> & {
  LabelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
  label: FormControlLabelProps['label'];
  size?: 'small' | 'medium';
};
