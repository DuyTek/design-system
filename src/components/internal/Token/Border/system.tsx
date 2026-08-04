import refBorders from './reference';

const sysBorders = {
  sys: {
    border: {
      solid: `${refBorders.ref.border.width.thin} ${refBorders.ref.border.style.solid}`,
      solid_medium: `${refBorders.ref.border.width.medium} ${refBorders.ref.border.style.solid}`,
      dashed: `${refBorders.ref.border.width.thin} ${refBorders.ref.border.style.dashed}`,
    },
  },
};

export default sysBorders;
