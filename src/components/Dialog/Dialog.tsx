import { Dialog as MuiDialog } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { DialogContext } from './context';
import { DialogProps } from './model';

const Dialog = (props: DialogProps) => {
  const {
    children,
    open,
    onClose,
    disableBackdropClick = true,
    ...others
  } = props;
  const dialogValue = useMemo(() => ({ open, onClose }), [open, onClose]);

  const handleForwardOnClose = useCallback(
    (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
      if (reason === 'backdropClick') {
        return;
      }
      onClose?.(event, reason);
    },
    [onClose],
  );

  const onCloseMemo = useMemo(
    () => (disableBackdropClick ? handleForwardOnClose : onClose),
    [handleForwardOnClose, onClose, disableBackdropClick],
  );

  return (
    <MuiDialog open={open} onClose={onCloseMemo} {...others}>
      <DialogContext.Provider value={dialogValue}>
        {children}
      </DialogContext.Provider>
    </MuiDialog>
  );
};

export default Dialog;
