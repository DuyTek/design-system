import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const dialogContentTheme = (): {
  defaultProps?: ComponentsProps['MuiDialogContent'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiDialogContent'];
  variants?: ComponentsVariants['MuiDialogContent'];
} => ({
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(4),
    }),
  },
});

export default dialogContentTheme;
