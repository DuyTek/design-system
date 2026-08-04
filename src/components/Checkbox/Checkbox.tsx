import React from 'react';
import {
  FormControlLabel,
  formControlLabelClasses,
  styled,
} from '@mui/material';
import { CheckboxProps } from './model/CheckboxProps';
import BaseCheckbox from './BaseCheckbox';

const StyledLabel = styled(FormControlLabel)(({ theme }) => ({
  [`&.${formControlLabelClasses.root} > .${formControlLabelClasses.label}`]: {
    color: theme.refV2.neu.textdark[100],
    marginLeft: theme.spacing(2),
    [`&.${formControlLabelClasses.disabled}`]: {
      color: theme.refV2.neu.textlight[100],
    },
  },
}));

const SmallLabel = styled(StyledLabel)(({ theme }) => ({
  [`&.${formControlLabelClasses.root} > .${formControlLabelClasses.label}`]: {
    ...theme.sys.typo.body.small,
  },
}));

const MediumLabel = styled(StyledLabel)(({ theme }) => ({
  [`&.${formControlLabelClasses.root} > .${formControlLabelClasses.label}`]: {
    ...theme.sys.typo.body.medium,
  },
}));

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ LabelProps, label, size, ...props }: CheckboxProps, ref) => {
    const SizedLabel = size === 'small' ? SmallLabel : MediumLabel;
    const control = (
      <BaseCheckbox disableRipple size={size} {...props} ref={ref} />
    );
    return <SizedLabel control={control} label={label} {...LabelProps} />;
  },
);

export default Checkbox;
