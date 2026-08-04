import React from 'react';
import { TextFieldProps } from './model/TextFieldProps';
import BaseTextField from './BaseTextField';
import TextFieldCustomLabel from './TextFieldCustomLabel';
import BrandTextFieldClasses from './classes';

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({ LabelProps, ...props }, ref) => {
    const { disabled, error, label, required = true, tooltipLabel } = props;
    return (
      <div className={BrandTextFieldClasses.container}>
        {label && (
          <TextFieldCustomLabel
            error={error}
            disabled={disabled}
            required={required}
            tooltipLabel={tooltipLabel}
            htmlFor={props.id}
            {...LabelProps}
          >
            {label}
          </TextFieldCustomLabel>
        )}
        <BaseTextField {...props} ref={ref} />
      </div>
    );
  },
);

export default TextField;
