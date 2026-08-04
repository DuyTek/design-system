import { faHouse, faFolder } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, waitFor, within, screen, expect } from 'storybook/test';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '.';

const meta: Meta<typeof Select> = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    onChange: fn,
    placeholder: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    helperText: {
      control: { type: 'text' },
    },
  },
  component: Select,
  parameters: {
    controls: {
      exclude: ['component'],
    },
  },
  title: 'Select',
};

export default meta;
type Story = StoryObj<typeof Select>;

export const withoutProps: Story = {
  args: {
    slotProps: {
      input: {
        'aria-label': 'Select component root',
      },
    },
  },
};

export const withProps: Story = {
  args: {
    helperText: 'Sample helper text',
    label: 'Sample label',
    placeholder: 'Sample placeholder',
    value: 'Sample value',
    slotProps: {
      input: {
        'aria-label': 'Select component root',
      },
    },
  },
  render: (props) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Select {...props} />

      <Select {...props} label="disabled=true" value="" disabled />

      <Select {...props} label="fullWidth=false" fullWidth={false} />

      <div style={{ width: '300px' }}>
        <Select
          {...props}
          startIcon={faHouse}
          prefix="Prefix"
          suffix="Suffix"
          fullWidth
        />
      </div>

      <Select {...props} label="required=true" required />
    </div>
  ),
};

export const prefixSuffix: Story = {
  args: {
    label: 'With prefix and suffix',
    prefix: 'Prefix',
    startIcon: faFolder,
    suffix: 'Suffix',
    value: 'Sample value',
    slotProps: {
      input: {
        'aria-label': 'Select component root',
      },
    },
  },
  argTypes: {
    startIcon: {
      control: { type: 'select' },
      options: ['icon', 'none'],
      mapping: {
        icon: faFolder,
        none: undefined,
      },
    },
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <Select {...props} />
      <br />
      <Select {...props} startIcon={undefined} />
    </div>
  ),
  parameters: {
    controls: {
      include: ['prefix', 'suffix', 'disabled', 'startIcon', 'error'],
    },
  },
};

export const withError: Story = {
  args: {
    error: true,
    helperText: 'Sample error helper text',
    label: 'With error',
    value: 'Invalid value',
    slotProps: {
      input: {
        'aria-label': 'Select component root',
      },
    },
  },
};

export const withChildren: Story = {
  args: {
    children: [
      <MenuItem key={1} value="Value 1">
        Value 1
      </MenuItem>,
      <MenuItem key={2} value="Value 2">
        Value 2
      </MenuItem>,
      <MenuItem key={3} value="Value 3">
        Value 3
      </MenuItem>,
    ],
    label: 'With children',
    required: true,
    value: 'Value 2',
    slotProps: {
      input: {
        'aria-label': 'Select component root',
      },
    },
  },
  decorators: [(S) => <div style={{ height: '200px' }}>{S()}</div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Value 2'));
    await waitFor(
      () => {
        const value3 = screen.getByText('Value 3');
        expect(value3).toBeInTheDocument();
      },
      {
        timeout: 1000,
      },
    );
  },
};
