import refFontFamilies from './Reference/FontFamily';
import refFontSizes from './Reference/FontSize';
import refFontStyles from './Reference/FontStyle';
import refLetterSpacings from './Reference/LetterSpacing';
import refLineHeights from './Reference/LineHeight';
import refTextTransforms from './Reference/TextTransform';
import refFontWeights from './Reference/FontWeight';
import refTextDecoration from './Reference/TextDecoration';

const refTypography = {
  ref: {
    typo: {
      font: {
        ...refFontFamilies.ref.typo.font,
        ...refFontSizes.ref.typo.font,
        ...refFontStyles.ref.typo.font,
        ...refLetterSpacings.ref.typo.font,
        ...refTextDecoration.ref.typo.font,
        ...refLineHeights.ref.typo.font,
        ...refFontWeights.ref.typo.font,
        ...refTextTransforms.ref.typo.font,
      },
    },
  },
} as const;

export default refTypography;
