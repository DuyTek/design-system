import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import { userEvent } from 'storybook/test';
import Tabs, { Tab } from '.';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const meta: Meta = {
  title: 'Tabs/Level 2',
  render: function LevelTwoTabs({ fullWidth, item1, item2, item3 }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      event.preventDefault();
      setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="lab API tabs example"
          variant={`${fullWidth ? 'fullWidth' : 'standard'}`}
          level={2}
        >
          <Tab label={item1} {...a11yProps(0)} />
          <Tab label={item2} disabled {...a11yProps(1)} />
          <Tab label={item3} {...a11yProps(2)} />
        </Tabs>
        <CustomTabPanel index={0} value={value}>
          {item1}
        </CustomTabPanel>
        <CustomTabPanel index={1} value={value}>
          {item2}
        </CustomTabPanel>
        <CustomTabPanel index={2} value={value}>
          {item3}
        </CustomTabPanel>
      </Box>
    );
  },
  argTypes: {
    fullWidth: {
      control: {
        type: 'boolean',
      },
      description:
        'If true, the tabs will grow to use all the available space.',
    },
  },
  args: {
    fullWidth: false,
    item1: 'Item One',
    item2: 'Item Two',
    item3: 'Item Three',
  },
};

export default meta;

type Story = StoryObj;

export const tabs: Story = {
  args: {
    item1: 'Item One',
    item2: 'Item Two',
    item3: 'Item Three',
  },
  play: async () => {
    const user = userEvent.setup();
    await user.tab();
  },
};

export const fullWidthTabs: Story = {
  args: {
    fullWidth: true,
    item1: 'Item One',
    item2: 'Item Two',
    item3: 'Item Three',
  },
};
