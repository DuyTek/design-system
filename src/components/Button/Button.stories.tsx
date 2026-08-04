import { faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, NegativeButton, NeutralButton, PositiveButton } from '.';
import Icon from '../internal/Icon';

const meta: Meta<typeof Button> = {
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
    },
  },
  component: Button,
  parameters: {
    controls: {
      include: ['children', 'size', 'variant'],
    },
  },
  title: 'Button/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const StartIconAndText: Story = {
  args: {
    children: 'Button',
    startIcon: <Icon icon={faPlus} size="small" />,
    variant: 'contained',
  },
};

export const TextAndEndIcon: Story = {
  args: {
    children: 'Button',
    endIcon: <Icon icon={faChevronDown} size="small" />,
    variant: 'contained',
  },
};

export const Negative: Story = {
  render: (args) => <NegativeButton {...args} />,
  args: {
    children: 'Negative',
    variant: 'contained',
  },
};

export const Neutral: Story = {
  render: (args) => <NeutralButton {...args} />,
  args: {
    children: 'Neutral',
    variant: 'outlined',
  },
};

export const Positive: Story = {
  render: (args) => <PositiveButton {...args} />,
  args: {
    children: 'Positive',
    variant: 'contained',
  },
};
