import RadioGroup from '@mui/material/RadioGroup';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Radio } from '.';

type Story = StoryObj;

const meta: Meta = {
  title: 'Radio',
  component: Radio,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: {
      include: ['label', 'disabled'],
    },
  },
  render: (props) => (
    <RadioGroup>
      <Radio title="Radio" label="" value="1" {...props} />
      <Radio {...props} label="Option 2" value="2" />
      <Radio {...props} label="Option 3" value="3" />
    </RadioGroup>
  ),
};

export const Default: Story = {};

export const Checked: Story = {
  args: {
    label: 'Checked',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled & checked',
    checked: true,
    disabled: true,
  },
};

export default meta;
