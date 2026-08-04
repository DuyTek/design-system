import { TabsProps as MUITabsProps } from '@mui/material';
import { AlignType } from './type';

interface TabsProps extends Omit<MUITabsProps, 'centered'> {
  align?: AlignType;
  level?: string | number;
}

export default TabsProps;
