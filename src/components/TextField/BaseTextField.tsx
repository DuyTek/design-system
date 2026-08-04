import {
  faXmark as faClose,
  faEye,
  faEyeSlash,
  faMagnifyingGlass as faSearch,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { TextField as MuiTextField } from '@mui/material';
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import Icon from '../internal/Icon';
import { TextFieldProps } from './model/TextFieldProps';
import { NeutralButton } from '../Button';
import BrandTextFieldClasses from './classes';
import { AdornmentText, InputAdornment } from '../internal/InputAdornment';

const textFieldTestIds = {
  clearInput: 'clear-input',
  showPassword: 'show-password',
  hidePassword: 'hide-password',
};

function generateIconColor(
  props: Pick<TextFieldProps, 'disabled' | 'error' | 'value'>,
): string {
  const { value, disabled, error } = props;
  let color = 'sys.color.on_surface.placeholder';
  if (disabled) {
    color = 'sys.color.on_surface.variant.disabled';
  } else if (!error && value) {
    color = 'sys.color.on_surface.variant.default';
  } else if (error && value) {
    color = 'sys.color.on_error_container.variant.error';
  } else if (error && !value) {
    color = 'sys.color.on_error_container.placeholder';
  }
  return color;
}

function generateTextType(
  type: TextFieldProps['type'],
  showPassword: boolean,
): TextFieldProps['type'] {
  if (type === 'password') {
    if (showPassword) {
      return 'text';
    }
    return type;
  }
  return type;
}

function populateInputPropsEndAdornment(
  props: Pick<
    TextFieldProps,
    'value' | 'disabled' | 'type' | 'error' | 'suffix' | 'overrides'
  > & {
    showPassword: boolean;
    onClearInput?: () => void;
    handleClickShowPassword: () => void;
    endAdornmentInput?: React.ReactNode;
  },
) {
  const {
    type,
    disabled,
    value,
    showPassword,
    suffix,
    onClearInput,
    overrides,
    handleClickShowPassword,
  } = props;

  if (type === 'password') {
    return (
      <InputAdornment position="end">
        <NeutralButton
          data-testid={
            showPassword ?
              textFieldTestIds.hidePassword
              : textFieldTestIds.showPassword
          }
          size="small"
          onClick={handleClickShowPassword}
          disabled={disabled}
          variant="text"
          {...overrides?.showPasswordButton}
        >
          <Icon
            icon={showPassword ? faEyeSlash : faEye}
            color={generateIconColor(props)}
            size="small"
          />
        </NeutralButton>
      </InputAdornment>
    );
  }

  if (value && !disabled && onClearInput) {
    return (
      <InputAdornment position="end">
        <NeutralButton
          data-testid={textFieldTestIds.clearInput}
          size="small"
          onClick={onClearInput}
          {...overrides?.clearButton}
          variant="text"
        >
          <Icon icon={faClose} size="small" />
        </NeutralButton>
      </InputAdornment>
    );
  }

  if (!suffix && !props.endAdornmentInput) {
    return undefined;
  }

  return (
    <InputAdornment position="end" hasText={!!suffix}>
      {suffix && (
        <AdornmentText
          disabled={disabled}
          className={BrandTextFieldClasses.suffix}
        >
          {suffix}
        </AdornmentText>
      )}
      {props.endAdornmentInput}
    </InputAdornment>
  );
}
function populateInputPropsStartAdornment(
  props: Pick<
    TextFieldProps,
    'disabled' | 'error' | 'startIcon' | 'type' | 'value' | 'prefix'
  > & {
    startAdornmentInput?: React.ReactNode;
  },
) {
  const { startAdornmentInput, startIcon, type, prefix, disabled } = props;

  // If nothing, return undefined. This is to prevent rendering an 0px width InputAdornment
  if (!prefix && !startAdornmentInput && !startIcon && type !== 'search') {
    return undefined;
  }

  if (startIcon) {
    return (
      <InputAdornment position="start" hasText={!!prefix}>
        <Icon
          icon={typeof startIcon !== 'string' ? startIcon : undefined}
          size="small"
          color={generateIconColor(props)}
        />
        {prefix && <AdornmentText disabled={disabled}>{prefix}</AdornmentText>}
      </InputAdornment>
    );
  }

  if (type === 'search') {
    return (
      <InputAdornment position="start">
        <Icon icon={faSearch} size="small" color={generateIconColor(props)} />
      </InputAdornment>
    );
  }

  if (prefix || startAdornmentInput) {
    return (
      // Edge case: Autocomplete's multiple tags does not use Adornment Wrappers
      <>
        {startAdornmentInput}
        {prefix && <AdornmentText disabled={disabled}>{prefix}</AdornmentText>}
      </>
    );
  }

  return undefined;
}

function populateInputProps(
  InputPropsProp: Required<TextFieldProps>['InputProps'] | undefined,
  props: Parameters<typeof populateInputPropsEndAdornment>[0] &
    Parameters<typeof populateInputPropsStartAdornment>[0],
) {
  const {
    endAdornment: endAdornmentInput,
    startAdornment: startAdornmentInput,
  } = InputPropsProp || {};
  const endAdornment = populateInputPropsEndAdornment({
    endAdornmentInput,
    ...props,
  });

  const startAdornment = populateInputPropsStartAdornment({
    startAdornmentInput,
    ...props,
  });
  return { ...InputPropsProp, endAdornment, startAdornment };
}
const ErrorIcon = <Icon icon={faCircleExclamation} size="small" />;
const BaseTextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      InputProps: InputPropsProp,
      disabled,
      disabledClearInput = true,
      error,
      fullWidth = true,
      label,
      onChange: onChangeProp,
      onChangeMui,
      overrides,
      prefix,
      startIcon,
      suffix,
      type = 'text',
      value,
      helperText,
      tooltipLabel,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const onChange = useCallback(
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (onChangeMui) {
          onChangeMui(event);
        } else if (onChangeProp) {
          onChangeProp(event.target.value);
        }
      },
      [onChangeProp, onChangeMui],
    );

    const onClearInput = useCallback(() => onChangeProp?.(''), [onChangeProp]);

    const handleClickShowPassword = useCallback(
      () => setShowPassword((show) => !show),
      [],
    );

    const InputProps = useMemo<typeof InputPropsProp>(
      () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        populateInputProps(InputPropsProp, {
          disabled,
          error,
          handleClickShowPassword,
          onClearInput:
            type === 'search' || !disabledClearInput ? onClearInput : undefined,
          overrides,
          prefix,
          suffix,
          showPassword,
          startIcon,
          type,
          value,
        }),
      [
        InputPropsProp,
        disabled,
        disabledClearInput,
        error,
        handleClickShowPassword,
        onClearInput,
        overrides,
        prefix,
        suffix,
        showPassword,
        startIcon,
        type,
        value,
      ],
    );

    const HelperTextWithIcon = useMemo<TextFieldProps['helperText']>(() => {
      if (error && typeof helperText === 'string') {
        return (
          <>
            {ErrorIcon}
            {helperText}
          </>
        );
      }

      return helperText;
    }, [error, helperText]);

    return (
      <MuiTextField
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        helperText={HelperTextWithIcon}
        InputProps={InputProps}
        onChange={onChange}
        ref={ref}
        size="small"
        type={generateTextType(type, showPassword)}
        value={value}
        {...props}
      />
    );
  },
);

export default BaseTextField;
