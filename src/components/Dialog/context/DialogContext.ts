import React from 'react';
import { DialogProps as MuiDialogProps } from '@mui/material';

const defaultDialogContextValues: MuiDialogProps = {
  open: false,
  onClose: () => {},
};

const DialogContext = React.createContext<MuiDialogProps>(
  defaultDialogContextValues,
);

export const useDialog = () => React.useContext(DialogContext);
export default DialogContext;
