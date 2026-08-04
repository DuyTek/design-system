import refColors from '../Color/reference';
import refElevations from './reference';

const refElevation = refElevations.ref.elevation;
const refColor = refColors.ref.palette;

const sysElevations = {
  sys: {
    elevation: {
      minimal: `${refElevation.x.default} ${refElevation.y.default} ${refElevation.blur.default} ${refElevation.spread.default} ${refColor.neutral.a0}`,
      low: `${refElevation.x.default} ${refElevation.y.small} ${refElevation.blur.small} ${refElevation.spread.default} ${refColor.neutral.a10}`,
      medium: `${refElevation.x.default} ${refElevation.y.medium} ${refElevation.blur.high} ${refElevation.spread.default} ${refColor.neutral.a20}`,
      high: `${refElevation.x.default} ${refElevation.y.medium} ${refElevation.blur.medium} ${refElevation.spread.default} ${refColor.neutral.a30}`,
    },
  },
};

export default sysElevations;
