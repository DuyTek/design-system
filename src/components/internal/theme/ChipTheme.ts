import {
  chipClasses,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  Theme,
  iconClasses,
} from '@mui/material';
import refTypography from '../Token/Typography/reference';
import { ghostStartIconClassname } from '../../Chip/Chip';

const chipTheme = (): {
  defaultProps?: ComponentsProps['MuiChip'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiChip'];
  variants?: ComponentsVariants['MuiChip'];
} => ({
  styleOverrides: {
    // Filled variant
    outlined: ({ theme, ownerState: { color } }) => {
      const palette =
        (typeof color === 'string' && theme.palette[color]) ||
        theme.palette.grayA600;

      return {
        backgroundColor: palette.lighter,
        borderColor: palette.border,
        borderRadius: theme.borderRadius.radiusRounded4px,
        color: palette.dark,
        height: 24,
        padding: theme.spacing(0.5, 1.5),
        ...theme.sys.typo.body.small,
        fontWeight: refTypography.ref.typo.font.weight.medium,
        [`&.${chipClasses.disabled}`]: {
          opacity: 0.8,
          backgroundColor: theme.refV2.neu.bglight[500],
          borderColor: theme.refV2.neu.stroke[600],
          color: theme.refV2.neu.textlight[200],
        },
        [`& .${chipClasses.deleteIcon}`]: {
          color: palette.dark,
          '&:hover': {
            color: palette.dark,
          },
        },
        [`&.${chipClasses.clickable}`]: {
          '&:focus-visible': {
            outline: `2px solid ${palette.main}`,
            boxShadow: 'none',
          },
          '&:hover': {
            background: palette.light,
          },
          '&:active': {
            backgroundColor: palette.main,
          },
        },
      };
    },
    // Ghost variant
    filled: ({ theme, ownerState: { color } }) => {
      const palette =
        (typeof color === 'string' && theme.palette[color]) ||
        theme.palette.grayA600;
      return {
        backgroundColor: theme.refV2.neu.bglight[900],
        borderRadius: theme.borderRadius.radiusRounded4px,
        color: theme.refV2.neu.textdark[100],
        height: 24,
        padding: 0,
        ...theme.sys.typo.body.small,
        [`&.${chipClasses.disabled}`]: {
          backgroundColor: theme.refV2.neu.bglight[900],
          color: theme.refV2.neu.textlight[200],
          opacity: 0.8,
          [`& .${ghostStartIconClassname}`]: {
            backgroundColor: theme.refV2.neu.textlight[100],
          },
        },
        [`& .${ghostStartIconClassname}`]: {
          backgroundColor: palette.darker,
        },
        [`&.${chipClasses.clickable}`]: {
          border: '1px solid transparent',
          padding: theme.spacing(0.5, 1.5),
          backgroundColor: theme.refV2.neu.bglight[900],
          '&:hover': {
            outline: `1px solid ${theme.refV2.pri.blue[500]}`,
          },
          '&:active': {
            outline: `2px solid ${theme.refV2.pri.blue[500]}`,
          },
          '&:focus-visible': {
            border: `1px solid ${theme.refV2.pri.blue[500]}`,
            outline: `2px solid ${theme.refV2.pri.blue_a[600]}`,
            boxShadow: 'none',
          },
          [`& .${chipClasses.deleteIcon}`]: {
            color: theme.refV2.neu.textdark[600],
            '&:hover': {
              color: theme.refV2.neu.textdark[600],
            },
          },
        },
      };
    },
    label: {
      padding: 0,
    },
    icon: ({ theme }) => ({
      margin: 0,
      marginRight: theme.spacing(1),
    }),
    deleteIcon: {
      [`&.${iconClasses.root}`]: {
        fontSize: 16,
      },
    },
  },
});

export default chipTheme;
