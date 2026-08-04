import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Checkbox as MuiCheckbox, checkboxClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useMemo } from 'react';
import Icon from '../internal/Icon';
import { BaseCheckboxProps } from './model/BaseCheckboxProps';

const StyledCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  background: theme.refV2.neu.bglight[900],
  border: theme.sys.border.solid,
  borderColor: theme.refV2.neu.stroke[600],
  borderRadius: theme.ref.border.radius.subtly_rounded,
  height: 24,
  width: 24,

  '&:hover': {
    background: theme.refV2.neu.gray_a[800],
  },

  '&:active': {
    background: theme.refV2.neu.gray_a[700],
  },

  [`&.${checkboxClasses.checked}`]: {
    background: theme.refV2.pri.blue[500],
    border: 'none',
    color: theme.sys.color.on_primary.variant.default,

    '&:hover': {
      background: theme.refV2.pri.blue[400],
    },

    '&:active': {
      background: theme.refV2.pri.blue[300],
    },
  },

  [`&.${checkboxClasses.indeterminate}`]: {
    background: theme.refV2.pri.blue[500],
    border: 'none',
    color: theme.sys.color.on_primary.variant.default,

    '&:hover': {
      background: theme.refV2.pri.blue[400],
    },

    '&:active': {
      background: theme.refV2.pri.blue[300],
    },
  },

  [`&.${checkboxClasses.disabled}`]: {
    background: theme.refV2.neu.bglight[900],
    border: theme.sys.border.solid,
    borderColor: theme.refV2.neu.stroke[700],
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      background: theme.refV2.pri.bluelight[900],
    },
  },
}));

const SmallCheckbox = styled(StyledCheckbox)(() => ({
  height: 16,
  width: 16,
}));

const MediumCheckbox = styled(StyledCheckbox)(() => ({
  height: 24,
  width: 24,
}));

const StyledIcon = styled(Icon)(({ theme }) => ({
  [`.${checkboxClasses.disabled} &`]: {
    color: theme.refV2.neu.textlight[300],
  },
}));

const SmallIcon = styled(StyledIcon)(() => ({
  height: 12,
  width: 12,
}));

const MediumIcon = styled(StyledIcon)(() => ({
  height: 16,
  width: 16,
}));

const BaseCheckbox = React.forwardRef<HTMLButtonElement, BaseCheckboxProps>(
  ({ decorative, size, slotProps, ...props }, ref) => {
    const SizedCheckbox = size === 'small' ? SmallCheckbox : MediumCheckbox;
    const SizedIcon = size === 'small' ? SmallIcon : MediumIcon;
    const icon = useMemo(
      () => <SizedIcon icon={faCheck} style={{ opacity: 0 }} />,
      [SizedIcon],
    );
    const checkedIcon = useMemo(
      () => <SizedIcon icon={faCheck} />,
      [SizedIcon],
    );
    const indeterminateIcon = useMemo(
      () => <SizedIcon icon={faMinus} />,
      [SizedIcon],
    );

    const customSlotProps = useMemo<BaseCheckboxProps['slotProps']>(() => {
      if (decorative) {
        return {
          input: {
            ...slotProps?.input,
            component: 'div',
            type: undefined,
          },
          ...slotProps,
        };
      }
      return slotProps;
    }, [decorative, slotProps]);

    return (
      <SizedCheckbox
        icon={icon}
        checkedIcon={checkedIcon}
        indeterminateIcon={indeterminateIcon}
        slotProps={customSlotProps}
        {...props}
        ref={ref}
      />
    );
  },
);

export default BaseCheckbox;
