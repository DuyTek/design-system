import type { Property } from 'csstype';

const refTextDecoration = {
  ref: {
    typo: {
      font: {
        decoration: {
          default: 'none' satisfies Property.TextDecoration,
          underline: 'underline' satisfies Property.TextDecoration,
        },
      },
    },
  },
} as const;

export default refTextDecoration;
