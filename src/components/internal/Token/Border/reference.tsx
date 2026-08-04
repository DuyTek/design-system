import refBorderRadius from './Reference/BorderRadius';
import refBorderStyles from './Reference/BorderStyle';
import refBorderWidths from './Reference/BorderWidth';

const refBorders = {
  ref: {
    border: {
      ...refBorderRadius.ref.border,
      ...refBorderStyles.ref.border,
      ...refBorderWidths.ref.border,
    },
  },
} as const;

export default refBorders;
