import { checkboxClasses, iconClasses } from '@mui/material';
import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const checkboxTheme = (): {
  defaultProps?: ComponentsProps['MuiCheckbox'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiCheckbox'];
  variants?: ComponentsVariants['MuiCheckbox'];
} => ({
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1),
      height: 'inherit',
      aspectRatio: '1/1',
      color: theme.palette.text.secondary,
      '& .MuiTouchRipple-root': {
        color: theme.brandPalette.primary['30p'],
        ':hover': {
          color: theme.brandPalette.primary['4p'],
        },
      },

      [`&.${checkboxClasses.disabled}`]: {
        [`& .${iconClasses.root}`]: {
          color: theme.refV2.neu.textlight[100],
        },
      },
    }),
    checked: ({ theme }) => ({
      color: theme.palette.primary.main,
    }),
    indeterminate: ({ theme }) => ({
      color: theme.palette.primary.main,
    }),
  },
});

export default checkboxTheme;
