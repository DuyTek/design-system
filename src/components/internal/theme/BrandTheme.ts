import { createTheme, ThemeOptions as ThemeOptionsOld } from '@mui/material/styles';
import buttonTheme from './ButtonTheme';
import checkboxLabelTheme from './CheckboxTheme/CheckboxLabelTheme';
import checkboxTheme from './CheckboxTheme/CheckboxTheme';
import chipTheme from './ChipTheme';
import {
  dialogTheme,
  dialogTitleTheme,
  dialogActionsTheme,
  dialogContentTheme,
  dialogContentTextTheme,
} from './DialogTheme';
import filledInputTheme from './FilledInputTheme';
import formHelperTextTheme from './FormHelperTextTheme';
import outlinedInputTheme from './OutlinedInputTheme';
import selectTheme from './SelectTheme';
import tokens from '../Token/index';

const customThemeOptions = {
  ...tokens,
  fontSize: {
    xSmall: 10,
    small: 12,
    medium: 14,
    large: 16,
    xLarge: 24,
  },
  lineHeight: {
    small: 1.5,
    medium: 1.5,
    large: 1.63,
  },
  brandPalette: {
    primary: {
      '4p': '#1847ca0a',
      '8p': '#1847ca14',
      '12p': '#1847ca1f',
      '30p': '#1847ca4d',
      '50p': '#1847ca80',
    },
    secondary: {
      '12p': '#22283c1f',
      '50p': '#22283c80',
    },
    error: {
      '4p': '#d247200a',
      '12p': '#d247201f',
      '30p': '#d247204d',
      '160p':
        'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #D24720;',
      '190p':
        'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #D24720;',
    },
    warning: {
      '4p': '#f0be0d0a',
      '12p': '#f0be0d1f',
      '30p': '#f0be0d4d',
      '160p':
        'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #F0BE0D;',
      '190p':
        'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F0BE0D;',
    },
    info: {
      '4p': '#6190ef0a',
      '12p': '#6190ef1f',
      '160p':
        'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #6190EF;',
      '190p':
        'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #6190EF;',
    },
    success: {
      '4p': '#0f84610a',
      '12p': '#0f84611f',
      '160p':
        'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #0F8461',
      '190p':
        'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #0F8461;',
    },
  },
  borderRadius: {
    radiusSharp: '0px',
    radiusRounded4px: '4px',
    radiusRounded8px: '8px',
    radiusRounded16px: '16px',
  },
  other: {
    outlinedBorder: '#dbdde5',
    focusRingColor: '#005fcc',
    standardInputLine: '#dbdde5',
    divider: '#dbdde5',
    filledInputBackground: '#0000000f',
  },
} as const;

export const themeOptions: ThemeOptionsOld = {
  ...customThemeOptions,
  spacing: 4,
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 1280,
      lg: 1920,
      xl: 2560,
    },
  },
  palette: {
    primary: {
      main: '#1847ca',
      dark: '#002dad',
      light: '#2940e5',
      contrastText: '#fff',
    },
    secondary: {
      main: '#dbdde5',
      dark: '#bec1cd',
      light: '#e7e9ef',
      contrastText: '#22283c',
    },
    error: {
      main: '#d24720',
      dark: '#a6381a',
      light: '#e47150',
      contrastText: '#fff',
    },
    warning: {
      main: '#f0be0d',
      dark: '#d69f13',
      light: '#f3d25c',
      contrastText: '#22283c',
    },
    info: {
      main: '#598ef9',
      dark: '#4974cb',
      light: '#8bb1ff',
      contrastText: '#fff',
    },
    success: {
      main: '#0f8461',
      dark: '#276854',
      light: '#4ba187',
      contrastText: '#fff',
    },
    text: {
      primary: '#233145',
      secondary: '#808b9a',
      disabled: '#d9d9d9',
    },
    action: {
      active: '#686d808a',
      hover: '#686d800a',
      selected: '#686d8014',
      disabled: tokens.refV2.neu.textlight[300],
      disabledBackground: tokens.refV2.neu.stroke[700],
      focus: '#686d801f',
    },
    // custom brand color palettes
    bglight900: {
      main: tokens.refV2.neu.bglight[500],
      dark: tokens.refV2.neu.bglight[400],
      darker: tokens.refV2.neu.bglight[300],
      outline: tokens.refV2.pri.blue_a[600],

      border: tokens.refV2.neu.stroke[600],
      contrastText: tokens.refV2.neu.textdark[500],
      disabledBackground: tokens.refV2.neu.bglight[900],
    },
    blue400: {
      lighter: tokens.refV2.pri.blue_a[800],
      light: tokens.refV2.pri.blue_a[700],
      dark: tokens.refV2.pri.bluelight[700],
      darker: tokens.refV2.pri.bluelight[500],
      main: tokens.refV2.pri.bluelight[800],
      outline: tokens.refV2.pri.blue_a[600],

      border: tokens.refV2.pri.blue[800],
      contrastText: tokens.refV2.pri.blue[400],
    },
    blue500: {
      main: tokens.refV2.pri.blue[500],
      dark: tokens.refV2.pri.blue[400],
      darker: tokens.refV2.pri.blue[300],
      outline: tokens.refV2.pri.blue_a[600],

      border: tokens.refV2.pri.blue[800],
      contrastText: tokens.refV2.neu.textlight[900],
      disabledBackground: tokens.refV2.pri.bluelight[900],
    },
    blueA600: {
      lighter: tokens.refV2.sem.blue_a[800],
      light: tokens.refV2.sem.blue_a[700],
      main: tokens.refV2.sem.blue_a[600],
      dark: tokens.refV2.sem.blue[200],
      darker: tokens.refV2.sem.blue[100],
      border: tokens.refV2.sem.blue[300],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    bluelight800: {
      main: tokens.refV2.pri.blue[400],
      dark: tokens.refV2.pri.bluelight[700],
      darker: tokens.refV2.pri.bluelight[600],

      border: tokens.refV2.pri.blue[800],
      outline: tokens.refV2.pri.blue_a[600],
      contrastText: tokens.refV2.pri.blue[400],
      disabledBackground: tokens.refV2.pri.bluelight[900],
    },
    catBlueA600: {
      lighter: tokens.refV2.cat.blue_a[800],
      light: tokens.refV2.cat.blue_a[700],
      main: tokens.refV2.cat.blue_a[600],
      dark: tokens.refV2.cat.blue[500],
      darker: tokens.refV2.cat.blue[600],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    catGrayA600: {
      lighter: tokens.refV2.cat.gray_a[800],
      light: tokens.refV2.cat.gray_a[700],
      main: tokens.refV2.cat.gray_a[600],
      dark: tokens.refV2.cat.gray[400],
      darker: tokens.refV2.cat.gray[600],
      border: tokens.refV2.cat.gray[500],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    catGreenA600: {
      lighter: tokens.refV2.cat.green_a[800],
      light: tokens.refV2.cat.green_a[700],
      main: tokens.refV2.cat.green_a[600],
      dark: tokens.refV2.cat.green[200],
      darker: tokens.refV2.cat.green[600],
      border: tokens.refV2.cat.green[300],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    catPurpleA600: {
      lighter: tokens.refV2.cat.purple_a[800],
      light: tokens.refV2.cat.purple_a[700],
      main: tokens.refV2.cat.purple_a[600],
      dark: tokens.refV2.cat.purple[400],
      darker: tokens.refV2.cat.purple[600],
      border: tokens.refV2.cat.purple[500],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    catRedA600: {
      lighter: tokens.refV2.cat.red_a[800],
      light: tokens.refV2.cat.red_a[700],
      main: tokens.refV2.cat.red_a[600],
      dark: tokens.refV2.cat.red[100],
      darker: tokens.refV2.cat.red[600],
      border: tokens.refV2.cat.red[200],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    catYellowA600: {
      lighter: tokens.refV2.cat.yellow_a[800],
      light: tokens.refV2.cat.yellow_a[700],
      main: tokens.refV2.cat.yellow_a[600],
      dark: tokens.refV2.cat.yellow[200],
      darker: tokens.refV2.cat.yellow[600],
      border: tokens.refV2.cat.yellow[200],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    grayA600: {
      lighter: tokens.refV2.sem.gray_a[800],
      dark: tokens.refV2.sem.gray[100],
      light: tokens.refV2.sem.gray_a[700],
      main: tokens.refV2.sem.gray_a[600],
      darker: tokens.refV2.sem.gray[300],
      border: tokens.refV2.sem.gray[300],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    greenA600: {
      lighter: tokens.refV2.sem.green_a[800],
      light: tokens.refV2.sem.green_a[700],
      main: tokens.refV2.sem.green_a[600],
      dark: tokens.refV2.sem.green[200],
      darker: tokens.refV2.sem.green[300],
      border: tokens.refV2.sem.green[300],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    orangeA600: {
      lighter: tokens.refV2.sem.orange_a[800],
      light: tokens.refV2.sem.orange_a[700],
      main: tokens.refV2.sem.orange_a[600],
      dark: tokens.refV2.sem.orange[200],
      darker: tokens.refV2.sem.orange[300],
      border: tokens.refV2.sem.orange[300],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    redA600: {
      lighter: tokens.refV2.sem.red_a[800],
      light: tokens.refV2.sem.red_a[700],
      main: tokens.refV2.sem.red_a[600],
      dark: tokens.refV2.sem.red[400],
      darker: tokens.refV2.sem.red[500],
      border: tokens.refV2.sem.red[500],

      contrastText: tokens.refV2.neu.textlight[900],
    },
    red300: {
      lighter: tokens.refV2.cat.red_a[800],
      light: tokens.refV2.cat.red_a[700],
      dark: tokens.refV2.sem.red[900],
      darker: tokens.refV2.sem.red[800],
      main: tokens.refV2.sem.red[300],
      outline: tokens.refV2.sem.red_a[600],

      border: tokens.refV2.sem.red[700],
      contrastText: tokens.refV2.neu.textlight[900],
    },
    red400: {
      main: tokens.refV2.sem.red[400],
      dark: tokens.refV2.sem.red[300],
      darker: tokens.refV2.sem.red[200],
      outline: tokens.refV2.sem.red_a[600],

      border: tokens.refV2.sem.red[700],
      contrastText: tokens.refV2.neu.textlight[900],
      disabledBackground: tokens.refV2.sem.red_a[800],
    },
    red900: {
      main: tokens.refV2.sem.red[900],
      dark: tokens.refV2.sem.red[800],
      darker: tokens.refV2.sem.red[700],
      outline: tokens.refV2.sem.red_a[600],

      border: tokens.refV2.sem.red[700],
      contrastText: tokens.refV2.sem.red[300],
      disabledBackground: tokens.refV2.sem.red_a[800],
    },
    textdark600: {
      lighter: tokens.refV2.neu.gray_a[800],
      light: tokens.refV2.neu.gray_a[700],
      dark: tokens.refV2.neu.bglight[400],
      darker: tokens.refV2.neu.bglight[300],
      main: tokens.refV2.neu.textdark[500],
      outline: tokens.refV2.pri.blue_a[600],

      border: tokens.refV2.neu.stroke[600],
      contrastText: tokens.refV2.neu.bglight[900],
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 14,
    button: {
      textTransform: 'unset',
      fontWeight: 500,
    },
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgba(153, 153, 153, 0.12), 0 1px 1px 0 rgba(153, 153, 153, 0.14), 0 2px 1px -1px rgba(153, 153, 153, 0.2)',
    '0px 3px 1px -2px rgba(153, 153, 153, 0.2), 0px 2px 2px rgba(153, 153, 153, 0.14), 0px 1px 5px rgba(153, 153, 153, 0.12)',
    '0px 3px 3px -2px rgba(153, 153, 153, 0.2), 0px 3px 4px rgba(153, 153, 153, 0.14), 0px 1px 8px rgba(153, 153, 153, 0.12)',
    '0px 2px 4px -1px rgba(153, 153, 153, 0.2), 0px 4px 5px rgba(153, 153, 153, 0.14), 0px 1px 10px rgba(153, 153, 153, 0.12)',
    '0px 3px 5px -1px rgba(153, 153, 153, 0.2), 0px 5px 8px rgba(153, 153, 153, 0.14), 0px 1px 14px rgba(153, 153, 153, 0.12)',
    '0px 3px 5px -1px rgba(153, 153, 153, 0.2), 0px 6px 10px rgba(153, 153, 153, 0.14), 0px 1px 18px rgba(153, 153, 153, 0.12)',
    '0px 4px 5px -2px rgba(153, 153, 153, 0.2), 0px 7px 10px 1px rgba(153, 153, 153, 0.14), 0px 2px 16px 1px rgba(153, 153, 153, 0.12)',
    '0px 5px 5px -3px rgba(153, 153, 153, 0.2), 0px 8px 10px 1px rgba(153, 153, 153, 0.14), 0px 3px 14px 2px rgba(153, 153, 153, 0.12)',
    '0px 5px 6px -3px rgba(153, 153, 153, 0.2), 0px 9px 12px 1px rgba(153, 153, 153, 0.14), 0px 3px 16px 2px rgba(153, 153, 153, 0.12)',
    '0px 6px 6px -3px rgba(153, 153, 153, 0.2), 0px 10px 14px 1px rgba(153, 153, 153, 0.14), 0px 4px 18px 3px rgba(153, 153, 153, 0.12)',
    '0px 6px 7px -4px rgba(153, 153, 153, 0.2), 0px 11px 15px 1px rgba(153, 153, 153, 0.14), 0px 4px 20px 3px rgba(153, 153, 153, 0.12)',
    '0px 7px 8px -4px rgba(153, 153, 153, 0.2), 0px 12px 17px 2px rgba(153, 153, 153, 0.14), 0px 5px 22px 4px rgba(153, 153, 153, 0.12)',
    '0px 7px 8px -4px rgba(153, 153, 153, 0.2), 0px 13px 19px 2px rgba(153, 153, 153, 0.14), 0px 5px 24px 4px rgba(153, 153, 153, 0.12)',
    '0px 7px 9px -4px rgba(153, 153, 153, 0.2), 0px 14px 21px 2px rgba(153, 153, 153, 0.14), 0px 5px 26px 4px rgba(153, 153, 153, 0.12)',
    '0px 8px 9px -5px rgba(153, 153, 153, 0.2), 0px 15px 22px 2px rgba(153, 153, 153, 0.14), 0px 6px 28px 5px rgba(153, 153, 153, 0.12)',
    '0px 8px 10px -5px rgba(153, 153, 153, 0.2), 0px 16px 24px 2px rgba(153, 153, 153, 0.14), 0px 6px 30px 5px rgba(153, 153, 153, 0.12)',
    '0px 8px 11px -5px rgba(153, 153, 153, 0.2), 0px 17px 26px 2px rgba(153, 153, 153, 0.14), 0px 6px 32px 5px rgba(153, 153, 153, 0.12)',
    '0px 9px 11px -5px rgba(153, 153, 153, 0.2), 0px 18px 28px 2px rgba(153, 153, 153, 0.14), 0px 7px 34px 6px rgba(153, 153, 153, 0.12)',
    '0px 9px 12px -6px rgba(153, 153, 153, 0.2), 0px 19px 29px 2px rgba(153, 153, 153, 0.14), 0px 7px 36px 6px rgba(153, 153, 153, 0.12)',
    '0px 10px 13px -6px rgba(153, 153, 153, 0.2), 0px 20px 31px 3px rgba(153, 153, 153, 0.14), 0px 8px 38px 7px rgba(153, 153, 153, 0.12)',
    '0px 10px 13px -6px rgba(153, 153, 153, 0.2), 0px 21px 33px 3px rgba(153, 153, 153, 0.14), 0px 8px 40px 7px rgba(153, 153, 153, 0.12)',
    '0px 10px 14px -6px rgba(153, 153, 153, 0.2), 0px 22px 35px 3px rgba(153, 153, 153, 0.14), 0px 8px 42px 7px rgba(153, 153, 153, 0.12)',
    '0px 11px 14px -7px rgba(153, 153, 153, 0.2), 0px 23px 36px 3px rgba(153, 153, 153, 0.14), 0px 9px 44px 8px rgba(153, 153, 153, 0.12)',
    '0px 11px 15px -7px rgba(153, 153, 153, 0.2), 0px 24px 38px 3px rgba(153, 153, 153, 0.14), 0px 9px 46px 8px rgba(153, 153, 153, 0.12)',
  ],
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiButton: buttonTheme(),
    MuiCheckbox: checkboxTheme(),
    MuiChip: chipTheme(),
    MuiDialog: dialogTheme(),
    MuiDialogActions: dialogActionsTheme(),
    MuiDialogContent: dialogContentTheme(),
    MuiDialogContentText: dialogContentTextTheme(),
    MuiDialogTitle: dialogTitleTheme(),
    MuiFormControlLabel: checkboxLabelTheme(),
    MuiFilledInput: filledInputTheme(),
    MuiFormHelperText: formHelperTextTheme(),
    MuiOutlinedInput: outlinedInputTheme(),
    MuiSelect: selectTheme(),
  },
};

declare module '@mui/material/styles' {
  interface PaletteColor {
    border?: PaletteColor['main'];
    darker?: PaletteColor['main'];
    disabledBackground?: PaletteColor['main'];
    lighter?: PaletteColor['main'];
    outline?: PaletteColor['main'];
  }

  interface SimplePaletteColorOptions {
    border?: SimplePaletteColorOptions['main'];
    darker?: SimplePaletteColorOptions['main'];
    disabledBackground?: SimplePaletteColorOptions['main'];
    lighter?: SimplePaletteColorOptions['main'];
    outline?: SimplePaletteColorOptions['main'];
  }

  interface Palette {
    default: Palette['primary'];
    // custom brand color palettes
    bglight900: Palette['primary'];
    blueA600: Palette['primary'];
    blue400: Palette['primary'];
    blue500: Palette['primary'];
    bluelight800: Palette['primary'];
    catBlueA600: Palette['primary'];
    catGrayA600: Palette['primary'];
    catGreenA600: Palette['primary'];
    catPurpleA600: Palette['primary'];
    catRedA600: Palette['primary'];
    catYellowA600: Palette['primary'];
    grayA600: Palette['primary'];
    greenA600: Palette['primary'];
    orangeA600: Palette['primary'];
    redA600: Palette['primary'];
    red300: Palette['primary'];
    red400: Palette['primary'];
    red900: Palette['primary'];
    textdark600: Palette['primary'];
  }

  interface PaletteOptions {
    default?: PaletteOptions['primary'];
    // custom brand color palettes
    bglight900?: PaletteOptions['primary'];
    blueA600?: PaletteOptions['primary'];
    blue400?: PaletteOptions['primary'];
    blue500?: PaletteOptions['primary'];
    bluelight800?: PaletteOptions['primary'];
    catBlueA600?: PaletteOptions['primary'];
    catGrayA600?: PaletteOptions['primary'];
    catGreenA600?: PaletteOptions['primary'];
    catPurpleA600?: PaletteOptions['primary'];
    catRedA600?: PaletteOptions['primary'];
    catYellowA600?: PaletteOptions['primary'];
    grayA600?: PaletteOptions['primary'];
    greenA600?: PaletteOptions['primary'];
    orangeA600?: PaletteOptions['primary'];
    redA600?: PaletteOptions['primary'];
    red300?: PaletteOptions['primary'];
    red400?: PaletteOptions['primary'];
    red900?: PaletteOptions['primary'];
    textdark600?: PaletteOptions['primary'];
  }
}

export type BrandThemeAugmentation = {
  [Key in keyof typeof customThemeOptions]: (typeof customThemeOptions)[Key];
};
declare module '@mui/material/styles' {
  interface Theme extends BrandThemeAugmentation {}
  interface ThemeOptions extends BrandThemeAugmentation {}
}

export const brandTheme = createTheme(themeOptions);
export default brandTheme;
