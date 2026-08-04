import { Meta } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import { userEvent, within, expect, waitFor, screen } from 'storybook/test';
import Stack from '@mui/material/Stack';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from '.';
import { TextField } from '../TextField';
import { Select } from '../Select';
import { Button } from '../Button';

const renderForm = () => (
  <form>
    <Stack spacing={4}>
      <TextField label="Label" placeholder="Placeholder" />
      <TextField
        error
        label="Label"
        placeholder="Placeholder"
        helperText="Sample helper text"
      />
      <TextField
        label="Label"
        placeholder="Placeholder"
        multiline
        minRows={5}
      />
      <Select label="Label" placeholder="Placeholder" required />
    </Stack>
  </form>
);

const meta: Meta = {
  args: {
    disableBackdropClick: true,
    title: 'Title',
    contentTitle: 'Dialog Body',
    scroll: 'paper',
    content:
      'This is a replaceable component. Swap with any component you choose. Or hidden it with opacity.',
    centerButton: 'Center',
    rightButton: 'Right',
  },
  argTypes: {
    title: { control: 'text' },
    contentTitle: {
      control: 'select',
      options: ['text', 'longForm'],
      mapping: {
        longForm: renderForm(),
        text: 'Dialog Body',
      },
    },
    fullWidth: { control: 'boolean' },
    maxWidth: {
      control: 'select',
      description: 'The max-width of the dialog. `sm`, `md`, `xl`.',
      options: ['sm', 'md', 'xl', 'xs'],
    },
    scroll: { control: 'select', options: ['paper', 'body'] },
    content: { control: 'text' },
    leftButton: { control: 'text' },
    centerButton: { control: 'text' },
    rightButton: { control: 'text' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText('Open dialog'));
    await waitFor(() => expect(canvas.getByText('Title')).toBeInTheDocument(), {
      timeout: 150,
    });
  },
  render: function DialogComponent(args) {
    const {
      content,
      contentTitle,
      centerButton,
      fullWidth,
      leftButton,
      maxWidth,
      rightButton,
      scroll,
      title,
      ...props
    } = args;
    const [openDialog, setOpen] = useState(false);
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);
    return (
      <div style={{ height: 800 }}>
        <Button positive variant="contained" onClick={handleOpen}>
          Open dialog
        </Button>
        <Dialog
          disablePortal
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={openDialog}
          scroll={scroll}
          onClose={handleClose}
          {...props}
        >
          <DialogTitle
            closeButtonProps={{
              'aria-label': 'Close',
            }}
          >
            {title}
          </DialogTitle>
          <DialogContent title={contentTitle}>
            <DialogContentText>{content}</DialogContentText>
          </DialogContent>
          <DialogActions>
            {leftButton && (
              <Button positive variant="contained">
                {leftButton}
              </Button>
            )}
            {centerButton && (
              <Button positive variant="contained">
                {centerButton}
              </Button>
            )}
            {rightButton && (
              <Button positive variant="contained">
                {rightButton}
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
    );
  },
  title: 'Dialog',
};

export default meta;

export const AlertDialog = {
  args: {
    maxWidth: 'xs',
    content: 'This is a replaceable component. Swap with any component you choose. Or hidden it with opacity.',
  },
  render: function DialogComponent(args) {
    const {
      content,
      contentTitle,
      centerButton,
      fullWidth,
      maxWidth,
      rightButton,
      scroll,
      title,
      ...props
    } = args;
    const [openDialog, setOpen] = useState(false);
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);
    return (
      <div style={{ height: 800 }}>
        Enable <code>alert</code> prop of <code>DialogTitle</code> to show alert
        icon and hide x-mark button.
        <br />
        <Button positive variant="contained" onClick={handleOpen}>
          Open dialog
        </Button>
        <Dialog
          disablePortal
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={openDialog}
          scroll={scroll}
          onClose={handleClose}
          {...props}
        >
          <DialogTitle
            closeButtonProps={{
              'aria-label': 'Close',
            }}
            alert
          >
            {title}
          </DialogTitle>
          <DialogContent title={contentTitle}>
            <DialogContentText>{content}</DialogContentText>
          </DialogContent>
          <DialogActions>
            {centerButton && (
              <Button neutral variant="outlined">
                {centerButton}
              </Button>
            )}
            {rightButton && (
              <Button neutral variant="outlined">
                {rightButton}
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
    );
  },
};

export const SmallSize = {
  args: {
    maxWidth: 'sm',
  },
};

export const MediumSize = {
  args: {
    maxWidth: 'md',
  },
};

export const FullScreen = {
  args: {
    fullScreen: true,
    fullWidth: true,
    maxWidth: 'xl',
  },
};

export const Scroll = {
  args: {
    maxWidth: 'md',
    scroll: 'paper',
    contentTitle: 'longForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText('Open dialog'));
    await waitFor(() => expect(canvas.getByText('Title')).toBeInTheDocument(), {
      timeout: 150,
    });
  },
};

export const DisableBackdropClick = {
  args: {
    disableBackdropClick: true,
  },
  decorators: [
    (Component) => (
      <div style={{ height: 800 }}>
        <p>Click outside to close</p>
        <Component />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText('Open dialog'));
    await waitFor(() => expect(canvas.getByText('Title')).toBeInTheDocument(), {
      timeout: 150,
    });

    await userEvent.click(canvas.getByText('Click outside to close'));
    expect(canvas.queryByText('Title')).toBeInTheDocument();

    await userEvent.click(canvas.getByLabelText('Close'));
    await waitFor(
      () => expect(screen.queryByText('Title')).not.toBeInTheDocument(),
      {
        timeout: 500,
      },
    );
  },
};
