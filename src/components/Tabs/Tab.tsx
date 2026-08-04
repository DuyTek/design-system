import React from 'react';
import { Tab as MUITab, TabProps } from '@mui/material';

const Tab = (props: TabProps) => (<MUITab disableRipple {...props} />);

export default Tab;
