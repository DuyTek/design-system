import React from 'react';
import { ButtonProps } from './model/ButtonProps';
import Button from './Button';

const NeutralButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <Button neutral ref={ref} {...props} />,
);

export default NeutralButton;
