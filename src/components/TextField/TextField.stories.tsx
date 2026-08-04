import { faUser } from '@fortawesome/free-solid-svg-icons';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from 'storybook/test';
import React from 'react';
import { TextField, TextFieldProps } from '.';

const multilineValue =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

const meta: Meta<typeof TextField> = {
  argTypes: {
    type: {
      options: ['password', 'search', 'text'],
      control: { type: 'select' },
      description: 'Types of input field',
    },
    helperText: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    multiline: {
      control: { type: 'boolean' },
    },
    onChange: fn,
    onChangeMui: fn,
    placeholder: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    startIcon: {
      options: ['icon', 'none'],
      control: { type: 'select' },
      mapping: {
        icon: faUser,
        none: undefined,
      },
    },
  },
  component: TextField,
  parameters: {
    controls: {
      exclude: ['component'],
    },
  },
  title: 'TextField',
};

export default meta;
type Story = StoryObj<typeof TextField>;

const ControlledTextField = ({ onChange, ...props }: TextFieldProps) => {
  const [value, setValue] = React.useState('Sample value');

  const handleChange = React.useCallback(
    (newValue: string) => {
      setValue(newValue);
      onChange?.(newValue);
    },
    [onChange],
  );

  return <TextField {...props} onChange={handleChange} value={value} />;
};

export const withoutProps: Story = {
  render: (props) => (
    <ControlledTextField {...props} label="Label" id="sample-input" />
  ),
};

export const withProps: Story = {
  args: {
    helperText: 'Sample helper text',
    label: 'Sample label',
    placeholder: 'Sample placeholder',
    value: 'Sample value',
    fullWidth: false,
    id: 'sample-input-with-props',
  },
  render: (props) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <TextField {...props} tooltipLabel="Sample label tooltip" startIcon={faUser} />
      <TextField {...props} label="disabled=true" disabled startIcon={faUser} />
      <TextField {...props} label="required=false" required={false} />
    </div>
  ),
};

export const PrefixSuffix: Story = {
  args: {
    id: 'prefix-suffix-input',
    label: 'Prefix/Suffix',
    prefix: 'Height',
    startIcon: faUser,
    suffix: 'px',
    value: '100',
    fullWidth: false,
  },
  render: (props) => <ControlledTextField {...props} />,
};

export const withError: Story = {
  args: {
    error: true,
    helperText: 'Sample error helper text',
    label: 'With error',
    value: 'Invalid value',
    startIcon: faUser,
    id: 'with-error-input',
  },
  render: (props) => (
    <>
      <TextField {...props} />
      <br />
      <TextField
        {...props}
        InputProps={{ className: outlinedInputClasses.focused }}
        label="Focused"
      />
    </>
  ),
};

export const textArea: Story = {
  args: {
    multiline: true,
    fullWidth: true,
    startIcon: faUser,
    value: multilineValue,
    id: 'text-area-input',
  },
  render: (props) => (
    <>
      <TextField {...props} label="With single line value" />
      <br />
      <TextField {...props} error label="Errors" />
      <br />
      <TextField {...props} disabled label="Disabled" helperText="Helper text" />
    </>
  ),
};

export const search: Story = {
  args: {
    type: 'search',
    id: 'search-input',
  },
  render: (props) => (
    <>
      <TextField {...props} label="Search" />
      <br />
      <TextField {...props} label="With value" value="foo" />
    </>
  ),
};

export const password: Story = {
  args: {
    type: 'password',
    startIcon: faUser,
    id: 'password-input',
  },
  render: (props) => (
    <>
      <TextField {...props} label="Password" />
      <br />
      <TextField {...props} label="With value" value="foo" />
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const showPassword = canvas.getByTestId('show-password');
    await userEvent.click(showPassword);
  },
};

export const withControlledValue: Story = {
  args: {
    onChange: fn(),
    id: 'controlled-input',
    label: 'Controlled',
  },
  render: (props) => (
    <ControlledTextField
      {...props}
      helperText="This text field has its value controlled by its parent."
    />
  ),
};
