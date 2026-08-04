import { BRAND_TAB_LEVEL_1, BRAND_TAB_LEVEL_2 } from './constant';

export default function getClassname(level?: string | number) {
  return level === '2' || level === 2 ? BRAND_TAB_LEVEL_2 : BRAND_TAB_LEVEL_1;
}
