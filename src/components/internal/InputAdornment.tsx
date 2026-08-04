import {
  InputAdornment as MuiInputAdornment,
  styled,
  iconClasses,
  Typography,
} from '@mui/material';

export const InputAdornment = styled(MuiInputAdornment, {
  shouldForwardProp: (prop) => prop !== 'hasText' && prop !== 'inputType',
})<{
  hasText?: boolean;
  inputType?: 'select' | 'textfield';
}>(({ theme, inputType, hasText, position }) => ({
  margin: 0,
  marginRight: inputType === 'select' ? theme.spacing(7) : 0,
  ...(position === 'start' && {
    [`& .${iconClasses.root}`]: {
      marginRight: hasText ? theme.spacing(2) : theme.spacing(1),
    },
  }),
}));

export const AdornmentText = styled(Typography)<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    color: disabled ?
      theme.refV2.neu.textlight[100]
      : theme.refV2.neu.textdark[600],
    ...theme.sys.typo2.body.medium,
  }),
);
