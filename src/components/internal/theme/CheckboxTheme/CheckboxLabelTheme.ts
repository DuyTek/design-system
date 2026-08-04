import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const checkboxLabelTheme = (): {
  defaultProps?: ComponentsProps['MuiFormControlLabel'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiFormControlLabel'];
  variants?: ComponentsVariants['MuiFormControlLabel'];
} => ({
  styleOverrides: {
    root: ({ ownerState }) => ({
      height: ownerState.size === 'small' ? '28px' : '32px',
    }),
    label: ({ theme }) => ({
      color: theme.palette.text.primary,
      fontSize: theme.fontSize.large,
    }),
  },
});

export default checkboxLabelTheme;
