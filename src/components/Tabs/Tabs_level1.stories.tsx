import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent } from 'storybook/test';
import { Box } from '@mui/material';
import { Tab, TabContext, TabList, TabPanel } from '.';

const meta: Meta = {
  title: 'Tabs/Level 1',
  render: function LevelOneTabs({ align, item1, item2, item3 }) {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      event.preventDefault();
      setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            align={align}
          >
            <Tab label={item1} value="1" />
            <Tab label={item2} value="2" disabled />
            <Tab label={item3} value="3" />
          </TabList>
          <TabPanel value="1">{item1}</TabPanel>
          <TabPanel value="2">{item2}</TabPanel>
          <TabPanel value="3">{item3}</TabPanel>
        </TabContext>
      </Box>
    );
  },
  argTypes: {
    align: {
      control: {
        type: 'select',
      },
      options: ['left', 'center', 'right'],
      description: 'Alignment of the tabs',
    },
  },
  args: {
    align: 'left',
    item1: 'Item One',
    item2: 'Item Two',
    item3: 'Item Three',
  },
};

export default meta;

type Story = StoryObj;

export const tabs: Story = {
  args: {
    align: 'left',
    item1: 'Item One',
    item2: 'Item Two',
    item3: 'Item Three',
  },
  play: async () => {
    const user = userEvent.setup();
    await user.tab();
  },
};

export const centeredTabs: Story = {
  args: {
    align: 'center',
    item1: 'Item One',
    item2: 'Item Two',
    item3: 'Item Three',
  },
};

export const rightAlignedTabs: Story = {
  args: {
    align: 'right',
    item1: 'Item One',
    item2: 'Item Two',
    item3: 'Item Three',
  },
};
