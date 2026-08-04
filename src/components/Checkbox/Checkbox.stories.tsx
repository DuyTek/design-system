import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import React, { useCallback, useState } from 'react';
import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    disabled: {
      type: { name: 'boolean', required: false },
    },
    indeterminate: {
      type: { name: 'boolean', required: false },
    },
    label: {
      type: { name: 'string', required: false },
    },
    onChange: fn,
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  },
  component: Checkbox,
  parameters: {
    controls: {
      exclude: ['component'],
    },
  },
  title: 'Checkbox',
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
};

export const Indeterminate: Story = {
  render: () => {
    const Component = () => {
      const [v, set] = useState([true, false]);
      const handleParent = useCallback((_: unknown, b: boolean) => {
        set(([v0, v1]) => (v0 !== v1 ? [!b, !b] : [b, b]));
      }, []);
      const handleChild1: typeof handleParent = useCallback(
        (_, v0) => set(([, v1]) => [v0, v1]),
        [],
      );
      const handleChild2: typeof handleParent = useCallback(
        (_, v1) => set(([v0]) => [v0, v1]),
        [],
      );

      return (
        <>
          <Checkbox
            label="Parent"
            checked={v[0] && v[1]}
            indeterminate={v[0] !== v[1]}
            onChange={handleParent}
          />
          <Checkbox label="Child 1" checked={v[0]} onChange={handleChild1} />
          <Checkbox label="Child 2" checked={v[1]} onChange={handleChild2} />
        </>
      );
    };
    return <Component />;
  },
};

export const Small: Story = {
  render: () => (
    <>
      <Checkbox label="Small" size="small" />
      <br />
      <Checkbox label="Checked" checked size="small" />
      <br />
      <Checkbox label="Label" disabled size="small" />
      <br />
      <Checkbox label="Checked disabled" checked disabled size="small" />
      <br />
      <Checkbox label="Indeterminate" indeterminate size="small" />
      <br />
      <Checkbox
        label="Indeterminate disabled"
        indeterminate
        disabled
        size="small"
      />
    </>
  ),
};

export const Medium: Story = {
  render: () => (
    <>
      <Checkbox label="Medium" size="medium" />
      <br />
      <Checkbox label="Checked" checked size="medium" />
      <br />
      <Checkbox label="Label" disabled size="medium" />
      <br />
      <Checkbox label="Checked disabled" checked disabled size="medium" />
      <br />
      <Checkbox label="Indeterminate" indeterminate size="medium" />
      <br />
      <Checkbox
        label="Indeterminate disabled"
        indeterminate
        disabled
        size="medium"
      />
    </>
  ),
};
