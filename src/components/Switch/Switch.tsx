import FormControlLabel, {
  formControlLabelClasses,
} from '@mui/material/FormControlLabel';
import { switchClasses } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import React from 'react';
import { SwitchProps } from './model/SwitchProps';
import BaseSwitch, { brandCheckedIcon } from './BaseSwitch';
import Tooltip from '../internal/Tooltip';

const SwitchLabel = styled('p')(({ theme }) => ({
  ...theme.sys.typo2.body.medium,
  color: theme.refV2.neu.textdark[100],
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

const StyledFormControlLabel = styled(FormControlLabel)<{ fullWidth?: boolean; }>(({
  theme,
  fullWidth,
}) => ({
  marginLeft: 0,
  marginRight: 0,
  ...(fullWidth ? { width: '100%' } : {}),

  [`& .${formControlLabelClasses.label}`]: {
    ...theme.sys.typo2.body.medium,
    color: theme.refV2.neu.textdark[100],
  },

  [`& .${switchClasses.root}`]: {
    marginRight: theme.sys.spacing.component.medium,
  },

  '&:hover': {
    [`& .${switchClasses.switchBase}`]: {
      [`& + .${switchClasses.track}`]: {
        backgroundColor: theme.refV2.neu.gray_a[800],
      },

      [`&.${switchClasses.checked}`]: {
        [`& + .${switchClasses.track}`]: {
          backgroundColor: theme.refV2.pri.blue[400],
          border: 0,
        },
      },

      [`& > .${brandCheckedIcon}`]: {
        color: theme.refV2.pri.blue[400],
      },
    },
  },

  '&:active': {
    [`& .${switchClasses.switchBase}`]: {
      [`& + .${switchClasses.track}`]: {
        backgroundColor: theme.refV2.neu.gray_a[700],
      },

      [`&.${switchClasses.checked}`]: {
        [`& + .${switchClasses.track}`]: {
          backgroundColor: theme.refV2.pri.blue[300],
          border: 0,
        },
      },

      [`& > .${brandCheckedIcon}`]: {
        color: theme.refV2.pri.blue[300],
      },
    },
  },

  [`&.${formControlLabelClasses.disabled}`]: {
    [`& .${formControlLabelClasses.label}`]: {
      color: theme.refV2.neu.textlight[100],
    },
  },
}));

const LabelComponent = ({ label }: { label?: string }) => {
  if (!label) return null;

  return (
    <Tooltip title={label}>
      <SwitchLabel>{label}</SwitchLabel>
    </Tooltip>
  );
};

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ LabelProps, label, fullWidth, ...props }: SwitchProps, ref) => (
    <StyledFormControlLabel
      {...LabelProps}
      fullWidth={fullWidth}
      disableTypography={fullWidth}
      control={<BaseSwitch ref={ref} {...props} />}
      label={fullWidth ? <LabelComponent label={label} /> : label}
    />
  ),
);

export default Switch;
