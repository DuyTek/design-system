import MuiRadio, { radioClasses } from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import FormControlLabel, {
  formControlLabelClasses,
} from '@mui/material/FormControlLabel';
import React from 'react';
import { RadioProps } from './model/RadioProps';

const iconClassName = 'BrandRadio-icon';
const circleClassName = 'BrandRadio-circle';

const StyledLabel = styled(FormControlLabel)(({ theme }) => ({
  [`& > .${formControlLabelClasses.label}`]: {
    ...theme.sys.typo.body.small,
    color: theme.refV2.neu.textdark[100],
    paddingLeft: theme.ref.measure.spacing2,

    [`&.${formControlLabelClasses.disabled}`]: {
      color: theme.refV2.neu.textlight[100],
    },
  },

  [`& > .${radioClasses.root}`]: {
    background: 'none',
    padding: 0,

    '&:hover': {
      background: 'none',
    },
  },

  [`&:hover:not(.${formControlLabelClasses.disabled}) > .${radioClasses.root} > .${iconClassName}`]:
    {
      backgroundColor: theme.refV2.neu.gray_a[800],
    },
  [`&:hover:not(.${formControlLabelClasses.disabled}) > .${radioClasses.checked} > .${iconClassName}`]:
    {
      backgroundColor: theme.refV2.pri.blue[400],
    },

  [`&:active:not(.${formControlLabelClasses.disabled}) > .${radioClasses.root} > .${iconClassName}`]:
    {
      backgroundColor: theme.refV2.neu.gray_a[700],
    },
  [`&:active:not(.${formControlLabelClasses.disabled}) > .${radioClasses.checked} > .${iconClassName}`]:
    {
      backgroundColor: theme.refV2.pri.blue[300],
    },
}));

const StyledRadio = styled(MuiRadio)(({ theme }) => ({
  [`& > .${iconClassName}`]: {
    alignItems: 'center',
    backgroundColor: theme.refV2.neu.bglight[900],
    border: theme.sys.border.solid,
    borderColor: theme.refV2.neu.stroke[700],
    borderRadius: '50%',
    display: 'flex',
    height: 16,
    justifyContent: 'center',
    width: 16,
  },

  [`&.${radioClasses.checked} > .${iconClassName}`]: {
    backgroundColor: theme.refV2.pri.blue[500],
    border: 'none',

    [`.${radioClasses.disabled}&`]: {
      backgroundColor: theme.refV2.neu.bglight[300],
    },
  },

  [`&.${radioClasses.disabled} > .${iconClassName}`]: {
    [`& > .${circleClassName}`]: {
      backgroundColor: theme.refV2.neu.bglight[900],
    },
  },
}));

const Icon = styled('span')(() => ({}));

const Circle = styled('div')(({ theme }) => ({
  backgroundColor: theme.sys.color.on_primary.variant.default,
  borderRadius: '50%',
  height: 8,
  width: 8,
  zIndex: 1,
}));

const icon = <Icon className={iconClassName} />;
const checkedIcon = (
  <Icon className={iconClassName}>
    <Circle className={circleClassName} />
  </Icon>
);

const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  ({ LabelProps, label, ...props }, ref) => {
    const control = (
      <StyledRadio
        checkedIcon={checkedIcon}
        disableRipple
        icon={icon}
        {...props}
      />
    );
    return (
      <StyledLabel ref={ref} label={label} control={control} {...LabelProps} />
    );
  },
);

export default Radio;
