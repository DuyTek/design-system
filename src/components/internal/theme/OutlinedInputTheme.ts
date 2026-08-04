import {
  buttonBaseClasses,
  iconClasses,
  inputAdornmentClasses,
} from '@mui/material';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const outlinedInputTheme = (): {
  defaultProps?: ComponentsProps['MuiOutlinedInput'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiOutlinedInput'];
  variants?: ComponentsVariants['MuiOutlinedInput'];
} => ({
  defaultProps: {
    minRows: 3,
    size: 'small',
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      background: theme.sys.color.surface_highest.default,
      gap: theme.spacing(1),
      height: 32,
      padding: theme.spacing(0, 2, 0, 3),

      '&:hover': {
        [`& > .${outlinedInputClasses.notchedOutline}`]: {
          border: theme.sys.border.solid,
          borderColor: ownerState.disabled ? 'none' : theme.refV2.pri.blue[500],
          borderRadius: theme.ref.border.radius.moderate,
        },
      },

      [`.${inputAdornmentClasses.positionStart}`]: {
        [` .${iconClasses.root}`]: {
          color: theme.refV2.neu.textdark[100],
          width: 16,
          height: 16,
        },
      },
      [`.${inputAdornmentClasses.positionEnd} > *`]: {
        color: theme.refV2.neu.textdark[600],
      },

      [`& > .${outlinedInputClasses.notchedOutline}`]: {
        border: theme.sys.border.solid,
        borderColor: theme.refV2.neu.stroke[600],
        borderRadius: theme.ref.border.radius.moderate,
      },

      [`&.${outlinedInputClasses.disabled}`]: {
        color: theme.refV2.neu.textlight[100],
        [`.${inputAdornmentClasses.positionStart} > *`]: {
          color: theme.refV2.neu.textlight[100],
        },
        [`.${inputAdornmentClasses.positionEnd} > *`]: {
          color: theme.refV2.neu.textlight[100],
        },
        [`& > .${outlinedInputClasses.input}`]: {
          color: theme.refV2.neu.textlight[100],
        },
        [`& > .${outlinedInputClasses.notchedOutline}`]: {
          border: theme.sys.border.solid,
          borderColor: theme.refV2.neu.stroke[700],
          borderRadius: theme.ref.border.radius.moderate,
        },
        '&:hover': {
          [`& > .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.refV2.neu.stroke[700],
          },
        },
      },

      [`&.${outlinedInputClasses.error}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          border: theme.sys.border.solid,
          borderColor: theme.refV2.sem.red[400],
          borderRadius: theme.ref.border.radius.moderate,
        },

        [`&.${outlinedInputClasses.focused}`]: {
          [`& > .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.refV2.sem.red[300],
          },
        },
        [`&:hover > .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.refV2.sem.red[400],
        },
      },

      [`&.${outlinedInputClasses.focused}`]: {
        [`& > .${outlinedInputClasses.notchedOutline}`]: {
          border: theme.sys.border.solid_medium,
          borderColor: theme.refV2.pri.blue[500],
        },
      },
    }),
    // children
    input: ({ theme }) => ({
      ...theme.sys.typo2.body.medium,
      color: theme.refV2.neu.textdark[100],
      padding: theme.spacing(0),
      height: 20,

      '&::placeholder': {
        opacity: 1,
        color: theme.refV2.neu.textdark[600],
      },
      [`&.${outlinedInputClasses.disabled}`]: {
        WebkitTextFillColor: theme.refV2.neu.textlight[100],
      },

      '&::-ms-reveal': {
        display: 'none',
      },

      '&::-webkit-search-cancel-button': {
        display: 'none',
      },
    }),
    multiline: ({ theme }) => ({
      height: 'auto',
      padding: theme.spacing(2, 3),
      /*
        Issue: https://github.com/mui/material-ui/issues/42177
        [`& .${outlinedInputClasses.input}`]: {
          minHeight: theme.spacing(5),
          resize: 'vertical',
          marginRight: theme.spacing(0.75),
          marginBottom: theme.spacing(0.75),
          paddingBottom: theme.spacing(1.25),
        },
      */
      [`& .${inputAdornmentClasses.root}`]: {
        alignSelf: 'flex-start',
        maxHeight: 20,
      },
      [`& .${buttonBaseClasses.root}`]: {
        display: 'none',
      },
    }),
  },
});

export default outlinedInputTheme;
