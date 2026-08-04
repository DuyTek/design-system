import refSpacings from './reference';

const sysSpacings = {
  sys: {
    spacing: {
      component: {
        tiny: refSpacings.ref.measure.spacing0,
        small: refSpacings.ref.measure.spacing1,
        medium: refSpacings.ref.measure.spacing2,
        large: refSpacings.ref.measure.spacing3,
        larger: refSpacings.ref.measure.spacing4,
      },
      layout: {
        small: refSpacings.ref.measure.spacing6,
        medium: refSpacings.ref.measure.spacing8,
        large: refSpacings.ref.measure.spacing10,
        larger: refSpacings.ref.measure.spacing12,
      },
    },
  },
};

export default sysSpacings;
