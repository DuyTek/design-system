import MuiButton, { buttonClasses } from '@mui/material/Button';
import React, { useContext, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { ButtonGroupContext } from '@mui/material';
import { ButtonProps } from './model/ButtonProps';
import convertButtonPropsToMuiColor from './utils/convertButtonPropsToMuiColor';
import Icon from '../internal/Icon';

const negativeClassName = 'BrandButton-negative';
const neutralClassName = 'BrandButton-neutral';
const positiveClassName = 'BrandButton-positive';
const undefinedChildrenClassName = 'BrandButton-undefinedChildren';

const StyledButton = styled(MuiButton)({
  [`&.${undefinedChildrenClassName}`]: {
    minWidth: 0,

    [`& .${buttonClasses.startIcon}:last-child`]: {
      marginRight: 0,
    },

    [`& .${buttonClasses.endIcon}:first-of-type`]: {
      marginLeft: 0,
    },
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className: classNameProp,
      color: colorProp,
      icon: iconProp,
      negative,
      neutral,
      positive,
      startIcon: startIconProp,
      variant: variantProp,
      size,
      ...props
    },
    ref,
  ) => {
    let className = classNameProp;
    if (negative === true) {
      className = clsx(className, negativeClassName);
    } else if (neutral === true) {
      className = clsx(className, neutralClassName);
    } else if (positive === true) {
      className = clsx(className, positiveClassName);
    }

    if (typeof props.children === 'undefined' || props.children === '') {
      className = clsx(className, undefinedChildrenClassName);
    }

    const { color: groupColor, variant: groupVariant } =
      useContext(ButtonGroupContext);
    const variant = variantProp ?? groupVariant;
    const muiColor = convertButtonPropsToMuiColor({
      color: colorProp ?? groupColor,
      negative,
      neutral,
      positive,
      variant,
    });

    const startIcon = useMemo(() => {
      if (startIconProp) {
        return startIconProp;
      }

      if (iconProp) {
        return <Icon icon={iconProp} size="small" />;
      }

      return undefined;
    }, [iconProp, startIconProp]);

    useEffect(() => {
      if (size === 'large') {
        console.warn(
          'Warning: The Button prop `size="large"` is deprecated and will be removed in a future version. ' +
            'Please use `size="medium"` instead.',
        );
      }
    }, [size]);

    return (
      <StyledButton
        className={className}
        color={muiColor}
        ref={ref}
        startIcon={startIcon}
        variant={variant}
        size={size}
        {...props}
      />
    );
  },
);

export default Button;
