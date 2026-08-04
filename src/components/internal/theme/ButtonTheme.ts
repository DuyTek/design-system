import { iconClasses } from '@mui/material';
import { buttonClasses } from '@mui/material/Button';
import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    bglight900: true;
    blue400: true;
    blue500: true;
    bluelight800: true;
    red300: true;
    red400: true;
    red900: true;
    textdark600: true;
  }
}

export const thinBorderWidth = (_theme: Theme) => 1; // theme.ref.border.width.thin
export const mediumBorderWidth = (_theme: Theme) => 2; // theme.ref.border.width.medium
const smallMinWidth = 24;
const mediumMinWidth = 61;
const largeMinWidth = 70;
export const largePadding = (_theme: Theme) => 12; // theme.spacing(3)
export const mediumPadding = (_theme: Theme) => 8; // theme.spacing(2)
export const smallPadding = (_theme: Theme) => 4; // theme.spacing(1)
const newLetterSpacing = '0.24px';

const buttonTheme = (): {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
} => ({
  defaultProps: {
    disableElevation: true,
    disableFocusRipple: true,
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: {
      // We want to keep MUI focusVisible classname by also triggering this
      // when buttons detect keyboard interactions
      '&:focus-visible': {
        outline: '1px solid transparent',
      },
    },
    contained: ({ ownerState, theme }) => {
      const { color } = ownerState;
      const palette =
        (typeof color === 'string' &&
          color !== 'inherit' &&
          theme.palette[color]) ||
        undefined;

      return {
        borderRadius: theme.ref.border.radius.moderate,

        // MUI uses dark color for hover already

        ...(palette?.darker && {
          '&:active': {
            backgroundColor: palette!.darker,
          },
        }),

        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.refV2.neu.bglight[200],
          borderColor: 'transparent',
          borderStyle: theme.ref.border.style.solid,
          borderWidth: thinBorderWidth(theme),
          color: theme.refV2.neu.textlight[900],
        },

        [`&.${buttonClasses.focusVisible}`]: {
          outline: `${mediumBorderWidth(theme)}px solid ${palette?.outline}`,
        },
      };
    },
    outlined: ({ ownerState, theme }) => {
      const { color } = ownerState;
      const palette =
        (typeof color === 'string' &&
          color !== 'inherit' &&
          theme.palette[color]) ||
        undefined;

      return {
        backgroundColor: palette?.main,
        borderColor: palette?.border,
        borderStyle: theme.ref.border.style.solid,
        color: palette?.contrastText,

        ...((palette?.dark || palette?.border) && {
          '&:hover': {
            ...(palette?.dark && { backgroundColor: palette!.dark }),
            ...(palette?.border && { borderColor: palette!.border }),
          },
        }),

        ...(palette?.darker && {
          '&:active': {
            backgroundColor: palette!.darker,
          },
        }),

        [`&.${buttonClasses.disabled}`]: {
          borderColor: theme.palette.action.disabledBackground,
          backgroundColor: theme.refV2.neu.bglight[500],
        },

        [`&.${buttonClasses.focusVisible}`]: {
          borderStyle: theme.ref.border.style.solid,
          borderWidth: thinBorderWidth(theme),
          outline: `${mediumBorderWidth(theme)}px solid ${palette?.outline}`,

          ...(palette?.border && {
            borderColor: palette!.border,
          }),
        },
      };
    },
    text: ({ ownerState, theme }) => {
      const { color } = ownerState;
      const palette =
        (typeof color === 'string' &&
          color !== 'inherit' &&
          theme.palette[color]) ||
        undefined;

      return {
        borderRadius: theme.ref.border.radius.moderate,
        color: palette?.main,

        ...(palette?.dark && {
          '&:hover': {
            backgroundColor: palette!.dark,
          },
        }),

        ...(palette?.darker && {
          '&:active': {
            backgroundColor: palette!.darker,
          },
        }),

        [`&.${buttonClasses.focusVisible}`]: {
          borderWidth: thinBorderWidth(theme),
          outline: `${mediumBorderWidth(theme)}px solid ${palette?.outline}`,
        },
      };
    },
    startIcon: ({ ownerState: { size }, theme }) => {
      let marginRight: string;
      switch (size) {
        case 'large':
          marginRight = theme.spacing(2);
          break;
        case 'small':
          marginRight = theme.spacing(0.5);
          break;
        default:
          marginRight = theme.spacing(1);
      }

      return {
        marginLeft: 0, // reset the negative margin
        marginRight,
      };
    },
    endIcon: ({ ownerState: { size }, theme }) => {
      let marginLeft: string;
      switch (size) {
        case 'large':
          marginLeft = theme.spacing(2);
          break;
        case 'small':
          marginLeft = theme.spacing(0.5);
          break;
        default:
          marginLeft = theme.spacing(1);
      }

      return {
        marginLeft,
        marginRight: 0, // reset the negative margin
      };
    },
    sizeLarge: ({ theme }) => ({
      fontFamily: theme.ref.typo.font.family.inter,
      fontSize: theme.ref.typo.font.size14,
      fontStyle: theme.ref.typo.font.style.normal,
      fontWeight: theme.ref.typo.font.weight.bold,
      lineHeight: theme.ref.typo.font.lineheight16,
      letterSpacing: 0.56,
      minHeight: theme.ref.measure.spacing10,
      minWidth: largeMinWidth,
      padding: largePadding(theme),
      textTransform: theme.ref.typo.font.transform.uppercase,

      [`&.${buttonClasses.sizeLarge}:has(> .${iconClasses.root})`]: {
        // special case: icon button is allowed to be square
        minWidth: theme.ref.measure.spacing10,
      },
    }),
    containedSizeLarge: ({ theme }) => ({
      // we are changing border width on focused so we have to adjust padding to accommodate
      // using box-sizing: border-box doesn't work because we don't want to set width / height
      // another option is to use inset box shadow but that requires modern browsers
      [`&.${buttonClasses.disabled}`]: {
        padding:
          largePadding(theme) -
          (mediumBorderWidth(theme) - thinBorderWidth(theme)),
      },
      [`&.${buttonClasses.focusVisible}`]: {
        padding: largePadding(theme) - mediumBorderWidth(theme),
      },
    }),
    outlinedSizeLarge: ({ theme }) => ({
      // adjust padding to accommodate focused border
      padding: largePadding(theme) - thinBorderWidth(theme),
      [`&.${buttonClasses.focusVisible}`]: {
        padding: largePadding(theme) - mediumBorderWidth(theme),
      },
    }),
    textSizeLarge: ({ theme }) => ({
      // adjust padding to accommodate focused border
      [`&.${buttonClasses.focusVisible}`]: {
        padding: largePadding(theme) - mediumBorderWidth(theme),
      },
    }),
    sizeMedium: ({ theme }) => ({
      fontFamily: theme.ref.typo.font.family.inter,
      fontSize: theme.ref.typo.font.size14,
      fontStyle: theme.ref.typo.font.style.normal,
      fontWeight: theme.ref.typo.font.weight.medium,
      lineHeight: theme.ref.typo.font.lineheight16,
      letterSpacing: 0.28,
      minHeight: theme.ref.measure.spacing8,
      minWidth: mediumMinWidth,
      padding: mediumPadding(theme),
      textTransform: theme.ref.typo.font.transform.default,

      [`&.${buttonClasses.sizeMedium}:has(> .${iconClasses.root})`]: {
        // special case: icon button is allowed to be square
        minWidth: theme.ref.measure.spacing8,
      },
    }),
    containedSizeMedium: ({ theme }) => ({
      // adjust padding to accommodate border
      [`&.${buttonClasses.disabled}`]: {
        padding:
          mediumPadding(theme) -
          (mediumBorderWidth(theme) - thinBorderWidth(theme)),
      },
    }),
    outlinedSizeMedium: ({ theme }) => ({
      // adjust padding to accommodate border
      padding: mediumPadding(theme) - thinBorderWidth(theme),
    }),
    sizeSmall: ({ theme }) => ({
      fontFamily: theme.ref.typo.font.family.inter,
      fontSize: theme.ref.typo.font.size12,
      fontStyle: theme.ref.typo.font.style.normal,
      fontWeight: theme.ref.typo.font.weight.medium,
      lineHeight: theme.ref.typo.font.lineheight16,
      letterSpacing: newLetterSpacing,
      minHeight: theme.ref.measure.spacing6,
      // special case: small doesn't follow global min width
      minWidth: smallMinWidth,
      padding: smallPadding(theme),
      textTransform: theme.ref.typo.font.transform.default,
    }),
    containedSizeSmall: ({ theme }) => ({
      // adjust padding to accommodate border
      [`&.${buttonClasses.disabled}`]: {
        padding:
          smallPadding(theme) -
          (mediumBorderWidth(theme) - thinBorderWidth(theme)),
      },
    }),
    outlinedSizeSmall: ({ theme }) => ({
      // adjust padding to accommodate border
      padding: smallPadding(theme) - thinBorderWidth(theme),
    }),
  },
});

export default buttonTheme;
