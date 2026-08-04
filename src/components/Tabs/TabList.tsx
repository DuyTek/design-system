import { TabList as MUITabList } from '@mui/lab';
import { TabListProps } from './model';
import withTabsStyles from './HOC/withTabsStyles';

const TabList = withTabsStyles<TabListProps>(MUITabList);

export default TabList;
