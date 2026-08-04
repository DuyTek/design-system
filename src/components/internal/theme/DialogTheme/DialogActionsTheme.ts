import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const dialogActionsTheme = (): {
  defaultProps?: ComponentsProps['MuiDialogActions'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiDialogActions'];
  variants?: ComponentsVariants['MuiDialogActions'];
} => ({
  styleOverrides: {
    root: ({ theme }) => ({
      borderTop: `1px solid ${theme.refV2.neu.stroke[800]}`,
      padding: theme.spacing(4),
    }),
  },
});

export default dialogActionsTheme;
