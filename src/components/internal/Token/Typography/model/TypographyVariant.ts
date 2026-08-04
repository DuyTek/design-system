import { Property } from 'csstype';

type VariantProps = {
  fontSize?: Property.FontSize;
  fontWeight?: Property.FontWeight;
  lineHeight?: Property.LineHeight;
  letterSpacing?: Property.LetterSpacing;
  textDecoration?: Property.TextDecoration;
  textTransform?: Property.TextTransform;
  fontFamily?: Property.FontFamily;
  fontStyle?: Property.FontStyle;
};
export type TypographyV2 = {
  display: VariantProps;
  headline: VariantProps;
  tiny: VariantProps;
  title: {
    large: VariantProps;
    medium: VariantProps;
    small: VariantProps;
  };
  label: {
    medium: VariantProps;
    small: VariantProps;
    smallUppercase: VariantProps;
  };
  body: {
    large: VariantProps;
    medium: VariantProps;
    small: VariantProps;
  };
  link: {
    default: VariantProps;
    small: VariantProps;
  };
};
