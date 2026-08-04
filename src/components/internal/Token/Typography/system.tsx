import { TypographyV2 } from './model/TypographyVariant';
import refTypography from './reference';

const typo2: TypographyV2 = {
  display: {
    fontFamily: refTypography.ref.typo.font.family.inter,
    fontSize: refTypography.ref.typo.font.size[48],
    fontStyle: refTypography.ref.typo.font.style.normal,
    fontWeight: refTypography.ref.typo.font.weight.medium,
    lineHeight: refTypography.ref.typo.font.lineHeight[56],
    letterSpacing: refTypography.ref.typo.font.spacing['-0.96'],
  },
  headline: {
    fontFamily: refTypography.ref.typo.font.family.inter,
    fontSize: refTypography.ref.typo.font.size[32],
    fontStyle: refTypography.ref.typo.font.style.normal,
    fontWeight: refTypography.ref.typo.font.weight.semibold,
    lineHeight: refTypography.ref.typo.font.lineHeight[40],
    letterSpacing: refTypography.ref.typo.font.spacing['-1'],
  },
  title: {
    large: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[24],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.semibold,
      lineHeight: refTypography.ref.typo.font.lineHeight[32],
    },
    medium: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[16],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.semibold,
      lineHeight: refTypography.ref.typo.font.lineHeight[24],
      letterSpacing: refTypography.ref.typo.font.spacing['0.32'],
    },
    small: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[14],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.semibold,
      lineHeight: refTypography.ref.typo.font.lineHeight[20],
      letterSpacing: refTypography.ref.typo.font.spacing['0.14'],
    },
  },
  label: {
    medium: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[14],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.medium,
      lineHeight: refTypography.ref.typo.font.lineHeight[20],
    },
    small: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[12],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.medium,
      lineHeight: refTypography.ref.typo.font.lineHeight[16],
      letterSpacing: refTypography.ref.typo.font.spacing['0.24'],
    },
    smallUppercase: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[12],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.bold,
      lineHeight: refTypography.ref.typo.font.lineHeight[16],
      letterSpacing: refTypography.ref.typo.font.spacing['0.48'],
      textTransform: refTypography.ref.typo.font.transform.uppercase,
    },
  },
  tiny: {
    fontFamily: refTypography.ref.typo.font.family.inter,
    fontSize: refTypography.ref.typo.font.size[8],
    fontStyle: refTypography.ref.typo.font.style.normal,
    fontWeight: refTypography.ref.typo.font.weight.semibold,
    letterSpacing: refTypography.ref.typo.font.spacing['0.32'],
    textTransform: refTypography.ref.typo.font.transform.uppercase,
  },
  body: {
    large: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[16],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.regular,
      lineHeight: refTypography.ref.typo.font.lineHeight[24],
    },
    medium: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[14],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.regular,
      lineHeight: refTypography.ref.typo.font.lineHeight[20],
    },
    small: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[12],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.regular,
      lineHeight: refTypography.ref.typo.font.lineHeight['16'],
      letterSpacing: refTypography.ref.typo.font.spacing['0.24'],
    },
  },
  link: {
    default: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[14],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.regular,
      lineHeight: refTypography.ref.typo.font.lineHeight[20],
      textDecoration: refTypography.ref.typo.font.decoration.underline,
    },
    small: {
      fontFamily: refTypography.ref.typo.font.family.inter,
      fontSize: refTypography.ref.typo.font.size[12],
      fontStyle: refTypography.ref.typo.font.style.normal,
      fontWeight: refTypography.ref.typo.font.weight.regular,
      lineHeight: refTypography.ref.typo.font.lineHeight[16],
      textDecoration: refTypography.ref.typo.font.decoration.underline,
    },
  },
};

const sysTypography = {
  sys: {
    /** @deprecated This will be removed in the next version. Use `theme.sys.typo2` instead. */
    typo: {
      display: {
        large: {
          fontFamily: refTypography.ref.typo.font.family.inter,
          fontSize: refTypography.ref.typo.font.size[64],
          fontStyle: refTypography.ref.typo.font.style.normal,
          fontWeight: refTypography.ref.typo.font.weight.medium,
          lineHeight: refTypography.ref.typo.font.lineHeight[64],
          letterSpacing: refTypography.ref.typo.font.spacing.m2,
          textTransform: refTypography.ref.typo.font.transform.default,
        },
        small: {
          fontFamily: refTypography.ref.typo.font.family.inter,
          fontSize: refTypography.ref.typo.font.size[48],
          fontStyle: refTypography.ref.typo.font.style.normal,
          fontWeight: refTypography.ref.typo.font.weight.regular,
          lineHeight: refTypography.ref.typo.font.lineHeight[56],
          letterSpacing: refTypography.ref.typo.font.spacing.m1,
          textTransform: refTypography.ref.typo.font.transform.default,
        },
      },
      label: {
        large: {
          fontFamily: refTypography.ref.typo.font.family.inter,
          fontSize: refTypography.ref.typo.font.size[18],
          fontStyle: refTypography.ref.typo.font.style.normal,
          fontWeight: refTypography.ref.typo.font.weight.semibold,
          lineHeight: refTypography.ref.typo.font.lineHeight[24],
          letterSpacing: refTypography.ref.typo.font.spacing.default,
          textTransform: refTypography.ref.typo.font.transform.default,
        },
        medium: {
          fontFamily: refTypography.ref.typo.font.family.inter,
          fontSize: refTypography.ref.typo.font.size[14],
          fontStyle: refTypography.ref.typo.font.style.normal,
          fontWeight: refTypography.ref.typo.font.weight.bold,
          lineHeight: refTypography.ref.typo.font.lineHeight[16],
          letterSpacing: refTypography.ref.typo.font.spacing.default,
          textTransform: refTypography.ref.typo.font.transform.default,
        },
        small: {
          fontFamily: refTypography.ref.typo.font.family.inter,
          fontSize: refTypography.ref.typo.font.size[12],
          fontStyle: refTypography.ref.typo.font.style.normal,
          fontWeight: refTypography.ref.typo.font.weight.medium,
          lineHeight: refTypography.ref.typo.font.lineHeight[16],
          letterSpacing: refTypography.ref.typo.font.spacing.default,
          textTransform: refTypography.ref.typo.font.transform.default,
        },
      },
      title: {
        medium: {
          fontFamily: refTypography.ref.typo.font.family.inter,
          fontSize: refTypography.ref.typo.font.size[16],
          fontStyle: refTypography.ref.typo.font.style.normal,
          fontWeight: refTypography.ref.typo.font.weight.bold,
          lineHeight: refTypography.ref.typo.font.lineHeight[24],
          letterSpacing: refTypography.ref.typo.font.spacing.default,
          textTransform: refTypography.ref.typo.font.transform.default,
        },
        large: {
          fontFamily: refTypography.ref.typo.font.family.inter,
          fontSize: refTypography.ref.typo.font.size[24],
          fontStyle: refTypography.ref.typo.font.style.normal,
          fontWeight: refTypography.ref.typo.font.weight.semibold,
          lineHeight: refTypography.ref.typo.font.lineHeight[32],
          letterSpacing: refTypography.ref.typo.font.spacing.default,
          textTransform: refTypography.ref.typo.font.transform.default,
        },
      },
      body: {
        medium: {
          fontFamily: refTypography.ref.typo.font.family.inter,
          fontSize: refTypography.ref.typo.font.size[16],
          fontStyle: refTypography.ref.typo.font.style.normal,
          fontWeight: refTypography.ref.typo.font.weight.regular,
          lineHeight: refTypography.ref.typo.font.lineHeight[24],
          letterSpacing: refTypography.ref.typo.font.spacing.default,
          textTransform: refTypography.ref.typo.font.transform.default,
        },
        small: {
          fontFamily: refTypography.ref.typo.font.family.inter,
          fontSize: refTypography.ref.typo.font.size[14],
          fontStyle: refTypography.ref.typo.font.style.normal,
          fontWeight: refTypography.ref.typo.font.weight.regular,
          letterSpacing: refTypography.ref.typo.font.spacing.default,
          textTransform: refTypography.ref.typo.font.transform.default,
          lineHeight: refTypography.ref.typo.font.lineHeight[20],
        },
      },
      headline: {
        medium: {
          fontFamily: refTypography.ref.typo.font.family.inter,
          fontSize: refTypography.ref.typo.font.size[32],
          fontStyle: refTypography.ref.typo.font.style.normal,
          fontWeight: refTypography.ref.typo.font.weight.medium,
          lineHeight: refTypography.ref.typo.font.lineHeight[40],
          letterSpacing: refTypography.ref.typo.font.spacing.m1,
          textTransform: refTypography.ref.typo.font.transform.default,
        },
      },
    },
    typo2: { ...typo2 },
  },
};

export default sysTypography;
