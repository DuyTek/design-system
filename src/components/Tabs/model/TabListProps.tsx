import { TabListProps as MUITabListProps } from '@mui/lab';
import { AlignType } from './type';

interface TabListProps extends Omit<MUITabListProps, 'centered'> {
  align?: AlignType;
  level?: string | number;
}

export default TabListProps;
