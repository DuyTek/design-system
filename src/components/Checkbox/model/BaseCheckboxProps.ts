import { CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';

export type BaseCheckboxProps = MUICheckboxProps & {
  /** #a11y: Change the semantic html of the checkbox from `input` to `div` */
  decorative?: boolean;
};
