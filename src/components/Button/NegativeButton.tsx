import React from 'react';
import { ButtonProps } from './model/ButtonProps';
import Button from './Button';

const NegativeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <Button negative ref={ref} {...props} />,
);

export default NegativeButton;
