import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const filledInputTheme = (): {
  defaultProps?: ComponentsProps['MuiFilledInput'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiFilledInput'];
  variants?: ComponentsVariants['MuiFilledInput'];
} => ({
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.other.filledInputBackground,
      height: 56,
      '&.Mui-disabled': {
        backgroundColor: theme.other.filledInputBackground,
        '&::before': {
          borderBottomColor: theme.other.standardInputLine,
        },
        // start adornment styles when disabled
        '.Brand-start-adornment': {
          color: theme.palette.text.disabled,
        },
        // end adornment styles when disabled
        '.Brand-end-adornment': {
          color: theme.palette.action.disabled,
        },
      },
      // start adornment styles
      '.Brand-start-adornment': {
        padding: theme.spacing(6.25, 0, 2, 0),
        color: theme.palette.text.secondary,
      },
      // end adornment styles
      '.Brand-end-adornment': {
        padding: theme.spacing(6.25, 0, 2, 0),
        color: theme.palette.action.active,
      },
    }),
    sizeSmall: ({ theme }) => ({
      height: 48,
      // start adornment styles when size is small
      '.Brand-start-adornment': {
        padding: theme.spacing(5.25, 0, 1, 0),
      },
      // end adornment styles when size is small
      '.Brand-end-adornment': {
        padding: theme.spacing(5.25, 0, 1, 0),
      },
    }),
    input: ({ theme }) => ({
      fontSize: theme.fontSize.medium,
      lineHeight: theme.lineHeight.medium,
    }),
    // @ts-ignore TODO: Remove this after all teams have migrated
    inputAdornedStart: ({ theme }) => ({
      marginLeft: theme.spacing(2),
      paddingBottom: theme.spacing(2),

      '&.MuiInputBase-inputSizeSmall': {
        paddingBottom: theme.spacing(1),
      },
    }),
    adornedStart: ({ theme }) => ({
      marginLeft: theme.spacing(2),
      paddingBottom: theme.spacing(2),

      '&.MuiInputBase-inputSizeSmall': {
        paddingBottom: theme.spacing(1),
      },
    }),
    // @ts-ignore TODO: Remove this after all teams have migrated
    inputAdornedEnd: ({ theme }) => ({
      marginRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      '&.MuiInputBase-inputSizeSmall': {
        paddingBottom: theme.spacing(1),
      },
    }),
    adornedEnd: ({ theme }) => ({
      marginRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),

      '&.MuiInputBase-inputSizeSmall': {
        paddingBottom: theme.spacing(1),
      },
    }),
  },
});

export default filledInputTheme;
