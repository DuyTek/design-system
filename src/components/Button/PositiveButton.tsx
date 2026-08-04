import React from 'react';
import { ButtonProps } from './model/ButtonProps';
import Button from './Button';

const PositiveButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <Button positive ref={ref} {...props} />,
);

export default PositiveButton;
