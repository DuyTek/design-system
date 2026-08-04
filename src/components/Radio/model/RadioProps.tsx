import { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { RadioProps as MUIRadioProps } from '@mui/material/Radio/Radio';

export type RadioProps = Omit<MUIRadioProps, 'ref'> & {
  LabelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
  label: FormControlLabelProps['label'];
};
