import colors from './Color';
import spacings from './Spacing';
import typography from './Typography';
import borders from './Border';
import elevations from './Elevation';

export const tokens = {
  ref: {
    ...colors.ref,
    ...spacings.ref,
    ...typography.ref,
    ...borders.ref,
    ...elevations.ref,
  },
  refV2: colors.refV2,
  sys: {
    ...colors.sys,
    ...spacings.sys,
    ...typography.sys,
    ...borders.sys,
    ...elevations.sys,
  },
} as const;

export default tokens;
