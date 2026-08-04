import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { styled } from '@mui/material';
import { Avatar, brandAvatarClasses } from '.';

const avatarImagePlaceholder = 'https://i.pravatar.cc/150?img=12';

const meta: Meta<typeof Avatar> = {
  args: {
    alt: 'Avatar',
  },
  argTypes: {
    disableTextFallback: {
      control: { type: 'boolean' },
    },
    primaryText: {
      control: { type: 'text' },
    },
    secondaryText: {
      control: { type: 'text' },
    },
    src: {
      control: { type: 'text' },
    },
    shape: {
      options: ['circular', 'square'],
      control: { type: 'select' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    size: {
      options: [
        'small',
        'medium',
        'large',
        'extraLarge',
        'extraSmall',
        'userProfile',
        'accountProfile',
      ],
      control: { type: 'select' },
    },
  },
  component: Avatar,
  render: (props) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Avatar {...props} size="extraSmall" />
      <Avatar {...props} size="small" />
      <Avatar {...props} size="medium" />
      <Avatar {...props} size="large" />
      <Avatar {...props} size="extraLarge" />
    </div>
  ),
  title: 'Avatar',
  parameters: {
    controls: {
      exclude: ['slots', 'component', 'slotProps'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const withLabels: Story = {
  args: {
    primaryText: 'Primary text',
    secondaryText: 'Secondary text',
    showLabel: true,
  },
};

export const withNoSecondaryText: Story = {
  args: {
    primaryText: 'Primary text',
    showLabel: true,
  },
};

export const disableTextFallback: Story = {
  args: {
    disableTextFallback: true,
    primaryText: 'Primary text',
    secondaryText: 'Secondary text',
    showLabel: true,
  },
};
export const icon: Story = {};

export const image: Story = {
  args: {
    src: avatarImagePlaceholder,
    showLabel: true,
    primaryText: 'Primary text',
    secondaryText: 'Secondary text',
  },
};

export const incomplete: Story = {
  args: {
    showLabel: true,
    secondaryText: 'sarah.martinez@example.com',
    size: 'medium',
  },
  render: (props) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Avatar
        {...props}
        secondaryText={undefined}
        primaryText="sarah.martinez@example.com"
      />
      <Avatar
        {...props}
        secondaryText={undefined}
        primaryText="Sarah Martinez"
      />
      <Avatar {...props} src={avatarImagePlaceholder} />
      <Avatar {...props} primaryText="Sarah Martinez" />
      <Avatar {...props} />
    </div>
  ),
};

export const organization: Story = {
  args: {
    shape: 'square',
  },
};

export const profiles: Story = {
  args: {
    shape: 'circular',
    src: avatarImagePlaceholder,
  },
  render: (props) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Avatar {...props} size="userProfile" />
      <Avatar {...props} size="accountProfile" />
    </div>
  ),
};

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  [`& + .${brandAvatarClasses.primaryText}`]: {
    color: theme.refV2.pri.blue[500],
  },

  [`& + .${brandAvatarClasses.secondaryText}`]: {
    fontWeight: 700,
  },
}));

export const customization: Story = {
  args: {
    primaryText: 'Primary text',
    secondaryText: 'Secondary text',
    showLabel: true,
  },
  render: (props) => <StyledAvatar {...props} />,
};
