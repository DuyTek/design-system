import { selectClasses } from '@mui/material';
import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

const selectTheme = (): {
  defaultProps?: ComponentsProps['MuiSelect'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiSelect'];
  variants?: ComponentsVariants['MuiSelect'];
} => ({
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: theme.spacing(0, 0, 0, 3),

      ...(ownerState.fullWidth ? {} : { maxWidth: '204px' }),
    }),
    select: ({ theme, ownerState: { value } }) => ({
      color:
        // `value` of <input />, not of <Select />
        value === '' ?
          theme.refV2.neu.textdark[600]
          : theme.refV2.neu.textdark[100],
    }),
    outlined: ({ theme }) => ({
      padding: theme.spacing(2, 3, 2, 0),
    }),
    icon: ({ theme }) => ({
      marginLeft: theme.spacing(2),
      right: 9,
      color: theme.refV2.neu.textdark[600],
      [`&.${selectClasses.disabled}`]: {
        color: theme.refV2.neu.textlight[100],
      },
    }),
    disabled: ({ theme }) => ({
      color: theme.refV2.neu.textlight[100],
    }),
  },
});

export default selectTheme;
