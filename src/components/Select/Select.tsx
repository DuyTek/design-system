import { faAngleDown, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import FormHelperText from '@mui/material/FormHelperText';
import MuiSelect from '@mui/material/Select';
import React, { useMemo } from 'react';
import Icon, { IconProps } from '../internal/Icon';
import TextFieldCustomLabel from '../TextField/TextFieldCustomLabel';
import { SelectProps } from './model/SelectProps';
import { AdornmentText, InputAdornment } from '../internal/InputAdornment';

const DropDownIcon = (props: IconProps) => (
  <Icon icon={faAngleDown} size="small" {...props} />
);

const ErrorIcon = <Icon icon={faCircleExclamation} size="small" />;

function getAdornments({
  endAdornmentProp,
  startAdornmentProp,
  startIcon,
  prefix,
  suffix,
}: {
  endAdornmentProp?: React.ReactNode;
  startAdornmentProp?: React.ReactNode;
  startIcon?: IconProps['icon'];
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}) {
  let startAdornment: React.ReactNode = null;

  // TODO: Use only one prop for start adornment in the future
  if (startAdornmentProp) {
    startAdornment = (
      <InputAdornment position="start" hasText={!!prefix}>
        {startAdornmentProp}
        {prefix && <AdornmentText>{prefix}</AdornmentText>}
      </InputAdornment>
    );
  } else if (startIcon) {
    startAdornment = (
      <InputAdornment position="start" hasText={!!prefix}>
        <Icon icon={startIcon} size="small" />
        {prefix && <AdornmentText>{prefix}</AdornmentText>}
      </InputAdornment>
    );
  } else if (prefix) {
    startAdornment = (
      <InputAdornment position="start">
        <AdornmentText>{prefix}</AdornmentText>
      </InputAdornment>
    );
  }

  let endAdornment: React.ReactNode = endAdornmentProp;
  if (suffix) {
    endAdornment = (
      <InputAdornment position="end" inputType="select">
        {endAdornment}
        <AdornmentText>{suffix}</AdornmentText>
      </InputAdornment>
    );
  }

  return { startAdornment, endAdornment };
}

// @ts-expect-error - forwardRef not accepting generic type
const Select: <Value = unknown>(
  props: SelectProps<Value>,
) => React.JSX.Element = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      children,
      disabled,
      error,
      endAdornment: endAdornmentProp,
      fullWidth = true,
      helperText,
      label,
      overrides,
      placeholder,
      prefix,
      renderValue: renderValueProp,
      required,
      startAdornment: startAdornmentProp,
      startIcon,
      suffix,
      tooltipLabel,
      ...props
    }: SelectProps,
    ref,
  ) => {
    const renderValue = useMemo<typeof renderValueProp>(() => {
      if (renderValueProp) {
        return renderValueProp;
      }
      return (value: unknown) => `${value || placeholder || ''}`;
    }, [placeholder, renderValueProp]);

    const { startAdornment, endAdornment } = useMemo(
      () => getAdornments({
        endAdornmentProp,
        startAdornmentProp,
        startIcon,
        prefix,
        suffix,
      }),
      [endAdornmentProp, startAdornmentProp, startIcon, prefix, suffix],
    );

    return (
      <div>
        {label && (
          <TextFieldCustomLabel
            disabled={disabled}
            error={error}
            required={required}
            tooltipLabel={tooltipLabel}
            htmlFor={props.id}
            {...overrides?.label}
          >
            {label}
          </TextFieldCustomLabel>
        )}
        <MuiSelect
          ref={ref}
          disabled={disabled}
          error={error}
          endAdornment={endAdornment}
          fullWidth={fullWidth}
          displayEmpty
          renderValue={renderValue}
          startAdornment={startAdornment}
          IconComponent={DropDownIcon}
          size="small"
          {...props}
        >
          {children}
        </MuiSelect>
        {helperText && (
          <FormHelperText
            disabled={disabled}
            error={error}
            {...overrides?.helperText}
          >
            {error && ErrorIcon}
            {helperText}
          </FormHelperText>
        )}
      </div>
    );
  },
);

export default Select;
