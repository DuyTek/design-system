import { faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
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
    loading: {
      control: { type: 'boolean' },
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
    },
  },
  component: Button,
  parameters: {
    controls: {
      include: ['children', 'loading', 'size', 'variant'],
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

export const Loading: Story = {
  args: {
    children: 'Taking you in...',
    loading: true,
    variant: 'contained',
  },
};

export const LoadingComparison: Story = {
  render: (args) => (
    <Stack direction="row" alignItems="center" gap={2}>
      <Button {...args} loading={false}>
        Normal
      </Button>
      <Button {...args} loading>
        Taking you in...
      </Button>
    </Stack>
  ),
  args: {
    variant: 'contained',
  },
  parameters: {
    // Label, size and loading are fixed by this story; only variant is live
    controls: { include: ['variant'] },
  },
};

export const LoadingSizes: Story = {
  render: (args) => (
    <Stack direction="row" alignItems="center" gap={2}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <Button key={size} {...args} size={size} loading>
          Taking you in...
        </Button>
      ))}
    </Stack>
  ),
  args: {
    variant: 'contained',
  },
  parameters: {
    controls: { include: ['variant'] },
  },
};

export const LoadingVsDisabled: Story = {
  render: () => (
    <Stack gap={2}>
      {(['contained', 'outlined', 'text'] as const).map((variant) => (
        <Stack key={variant} direction="row" alignItems="center" gap={2}>
          <Button variant={variant}>Normal</Button>
          <Button disabled variant={variant}>
            Disabled
          </Button>
          <Button loading variant={variant}>
            Taking you in...
          </Button>
        </Stack>
      ))}
    </Stack>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const LoadingFullWidth: Story = {
  render: () => (
    <Stack gap={3} sx={{ width: 360 }}>
      {(['contained', 'outlined', 'text'] as const).map((variant) => (
        <Stack key={variant} gap={1}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <Button key={size} fullWidth loading size={size} variant={variant}>
              Taking you in...
            </Button>
          ))}
        </Stack>
      ))}
    </Stack>
  ),
  parameters: {
    // Shows every variant and size at once, so there is nothing to control
    controls: { disable: true },
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
