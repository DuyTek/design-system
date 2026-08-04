import { Tabs as MUITabs } from '@mui/material';
import { TabsProps } from './model';
import withTabsStyles from './HOC/withTabsStyles';

const Tabs = withTabsStyles<TabsProps>(MUITabs);

export default Tabs;
