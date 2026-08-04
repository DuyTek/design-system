import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  argTypes: {
    disabled: {
      type: { name: 'boolean', required: false },
    },
    label: {
      type: { name: 'string', required: false },
    },
    fullWidth: {
      type: { name: 'boolean', required: false },
    },
  },
  component: Switch,
  title: 'Switch',
  parameters: {
    controls: {
      exclude: ['checked', 'onChange', 'component', 'LabelProps'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const WithLabel: Story = {
  args: {
    disabled: false,
    label: 'Switch label',
    fullWidth: false,
  },
  render: function SwitchWithLabel({ disabled, label, fullWidth }) {
    const [checkedState, setCheckedState] = React.useState(false);
    return (
      <Switch
        checked={checkedState}
        disabled={disabled}
        label={label}
        onChange={(_, c) => setCheckedState(c)}
        fullWidth={fullWidth}
      />
    );
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    title: 'Checked switch',
  },
};

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Switch label',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    title: 'Disabled checked switch',
  },
};
