import { iconClasses } from '@mui/material';
import { formHelperTextClasses } from '@mui/material/FormHelperText';
import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const formHelperTextTheme = (): {
  defaultProps?: ComponentsProps['MuiFormHelperText'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiFormHelperText'];
  variants?: ComponentsVariants['MuiFormHelperText'];
} => ({
  styleOverrides: {
    root: ({ theme }) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      color: theme.refV2.neu.textdark[100],
      margin: theme.spacing(1, 3, 0, 0),
      ...theme.sys.typo.label.small,
      fontWeight: 'normal',
      lineHeight: '18px',

      [`& > .${iconClasses.root}`]: {
        fontSize: 14,
        marginRight: theme.spacing(1),
      },
      [`&.${formHelperTextClasses.disabled}`]: {
        color: theme.refV2.neu.textlight[100],
      },

      [`&.${formHelperTextClasses.error}`]: {
        color: theme.refV2.sem.red[400],
      },
    }),
  },
});

export default formHelperTextTheme;
