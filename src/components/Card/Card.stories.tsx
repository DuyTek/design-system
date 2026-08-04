import { List } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card, CardContent, CardHeader, CardMedia } from '.';

const cardMediaPlaceholder = 'https://placehold.co/400x150';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes: {
    ref: { table: { disable: true } },
    component: { table: { disable: true } },
    selected: {
      description: 'If `true`, the card is selected',
      control: 'boolean',
    },
  },
  decorators: [(Story) => <List sx={{ width: '400px' }}>{Story()}</List>],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const card: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader title="Card title" />
      <CardContent>Content 1</CardContent>
      <CardContent>Content 2</CardContent>
    </Card>
  ),
  args: {
    selected: false,
  },
};

export const cardWithMedia: Story = {
  render: (args) => (
    <Card {...args}>
      <CardMedia
        image={cardMediaPlaceholder}
        sx={{
          height: '150px',
        }}
      />
      <CardHeader title="Card title" />
      <CardContent>Content 1</CardContent>
      <CardContent>Content 2</CardContent>
    </Card>
  ),
  args: {
    selected: false,
  },
};

export const selected: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader title="Selected card" />
      <CardContent>This card is selected.</CardContent>
    </Card>
  ),
  args: {
    selected: true,
  },
};
