import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { iconClasses } from '@mui/material/Icon';
import MuiSwitch, {
  SwitchProps as MuiSwitchProps,
  switchClasses,
} from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import React from 'react';
import { buttonBaseClasses } from '@mui/material';
import Icon from '../internal/Icon';

export const brandCheckedIcon = 'Brand-checkedIcon';

const StyledSwitch = styled(MuiSwitch)(({ theme }) => ({
  overflow: 'visible !important',
  padding: '0px !important',
  marginRight: theme.sys.spacing.component.medium,
  width: '32px !important',
  height: '20px !important',

  [`& .${switchClasses.switchBase}`]: {
    transitionDuration: '300ms',
    [`&.${buttonBaseClasses.focusVisible}`]: {
      [`& + .${switchClasses.track}`]: {
        outline: `2px solid ${theme.refV2.pri.blue[800]}`,
      },
    },

    [`& > .${switchClasses.thumb}`]: {
      backgroundColor: theme.refV2.neu.textdark[600],
      boxShadow: 'none',
      height: 12,
      width: 12,
    },

    [`& > .${brandCheckedIcon}`]: {
      alignItems: 'center',
      backgroundColor: theme.sys.color.on_primary.variant.default,
      borderRadius: '50%',
      color: theme.refV2.pri.blue[500],
      display: 'flex',
      justifyContent: 'center',
      height: 12,
      width: 12,

      [`& > .${iconClasses.root}`]: {
        width: 10,
        height: 10,
      },
    },

    [`& + .${switchClasses.track}`]: {
      backgroundColor: theme.sys.color.surface_highest.default,
      border: `${theme.sys.border.solid} ${theme.refV2.neu.stroke[600]}`,
      borderRadius: theme.ref.border.radius.pill_shaped,
      height: 'auto',
      opacity: 1,
    },

    [`&.${switchClasses.checked}`]: {
      transform: 'translateX(12px)',

      [`& + .${switchClasses.track}`]: {
        backgroundColor: theme.refV2.pri.blue[500],
        border: 0,
        height: 'auto',
        opacity: 1,
      },
    },

    [`&.${switchClasses.disabled}`]: {
      [`& > .${switchClasses.thumb}`]: {
        backgroundColor: theme.refV2.neu.textlight[300],
      },

      [`& > .${brandCheckedIcon}`]: {
        backgroundColor: theme.refV2.neu.bglight[300],
        color: theme.refV2.neu.textlight[300],
      },

      [`& + .${switchClasses.track}`]: {
        backgroundColor: theme.refV2.neu.bglight[900],
        border: `${theme.sys.border.solid} ${theme.refV2.neu.stroke[700]}`,
        opacity: 1,
      },

      [`&.${switchClasses.checked}`]: {
        [`& + .${switchClasses.track}`]: {
          backgroundColor: theme.refV2.neu.bglight[500],
          border: `${theme.sys.border.solid} ${theme.refV2.neu.stroke[700]}`,
        },

        [`& > .${brandCheckedIcon}`]: {
          backgroundColor: theme.refV2.neu.bglight[300],
          color: theme.refV2.neu.textlight[700],
        },
      },
    },
  },
}));

const checkedIcon = (
  <span className={brandCheckedIcon}>
    <Icon icon={faCheck} size="small" />
  </span>
);

const BaseSwitch = React.forwardRef<HTMLButtonElement, MuiSwitchProps>(
  (props, ref) => (
    <StyledSwitch
      disableRipple
      checkedIcon={checkedIcon}
      ref={ref}
      size="small"
      {...props}
    />
  ),
);

export default BaseSwitch;
