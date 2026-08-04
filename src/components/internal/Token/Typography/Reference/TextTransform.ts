import type { Property } from 'csstype';

const refTextTransforms = {
  ref: {
    typo: {
      font: {
        transform: {
          default: 'none' satisfies Property.TextTransform,
          uppercase: 'uppercase' satisfies Property.TextTransform,
          capitalize: 'capitalize' satisfies Property.TextTransform,
        },
      },
    },
  },
} as const;

export default refTextTransforms;
