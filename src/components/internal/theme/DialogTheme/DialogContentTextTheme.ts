import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const dialogContentTextTheme = (): {
  defaultProps?: ComponentsProps['MuiDialogContentText'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiDialogContentText'];
  variants?: ComponentsVariants['MuiDialogContentText'];
} => ({
  defaultProps: {
    maxWidth: 'md',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.sys.color.on_surface.variant.default,
      ...theme.sys.typo.body.small,
    }),
  },
});

export default dialogContentTextTheme;
