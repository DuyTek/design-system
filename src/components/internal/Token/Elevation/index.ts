import refElevations from './reference';
import sysElevations from './system';

const elevations = { ...refElevations, ...sysElevations };

export default elevations;
