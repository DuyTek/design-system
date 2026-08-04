import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const dialogTheme = (): {
  defaultProps?: ComponentsProps['MuiDialog'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiDialog'];
  variants?: ComponentsVariants['MuiDialog'];
} => ({
  defaultProps: {
    maxWidth: 'md',
  },
  styleOverrides: {
    paper: ({ theme }) => ({
      borderRadius: theme.borderRadius.radiusRounded8px,
      margin: theme.spacing(4),
      width: '100%',
    }),
    paperWidthXs: {
      maxWidth: 400,
    },
    paperWidthSm: {
      maxWidth: 400,
    },
    paperWidthMd: {
      maxWidth: 700,
    },
    paperFullScreen: {
      height: 'calc(100% - 32px)',
      maxHeight: 'calc(100% - 32px)',
    },
  },
});

export default dialogTheme;
