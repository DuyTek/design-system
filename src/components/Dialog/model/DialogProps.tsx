import { DialogProps as MuiDialogProps } from '@mui/material';

type DialogProps = {
  /**
   * The maximum width of the dialog.
   * Regarding the Design System, we restrict to only four sizes: 'xs', 'sm', 'md', 'xl'.
   * @default 'md'
   */
  maxWidth?: 'sm' | 'md' | 'xl' | 'xs';
  disableBackdropClick?: boolean;
} & Omit<MuiDialogProps, 'maxWidth'>;

export default DialogProps;
