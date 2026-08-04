import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const dialogTitleTheme = (): {
  defaultProps?: ComponentsProps['MuiDialogTitle'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiDialogTitle'];
  variants?: ComponentsVariants['MuiDialogTitle'];
} => ({
  defaultProps: {
    component: 'div',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.sys.color.on_surface.variant.default,
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(4),
      ...theme.sys.typo.title.medium,
    }),
  },
});

export default dialogTitleTheme;
