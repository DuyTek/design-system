import { LabelHTMLAttributes, PropsWithChildren } from 'react';

export interface TextFieldCustomLabelProps
  extends PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  tooltipLabel?: string;
  className?: string;
}
