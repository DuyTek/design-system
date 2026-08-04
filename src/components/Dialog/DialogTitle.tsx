import React from 'react';
import { DialogTitle as MuiDialogTitle, Stack, styled } from '@mui/material';
import { faCircleExclamation, faXmark as faClose } from '@fortawesome/free-solid-svg-icons';
import { useDialog } from './context';
import Button from '../Button';
import { DialogTitleProps } from './model';
import Icon from '../internal/Icon';

const AlertIcon = styled(Icon)(({ theme }) => ({
  color: theme.refV2.sem.red[400],
}));

const CloseButton = styled(Button)(({ theme }) => ({
  color: theme.refV2.neu.textdark[500],
}));

const DialogTitle = (props: DialogTitleProps) => {
  const { children, closeButtonProps, alert, ...others } = props;
  const { onClose } = useDialog();
  return (
    <MuiDialogTitle {...others}>
      <Stack direction="row" alignItems="center" gap={1}>
        {alert && <AlertIcon icon={faCircleExclamation} size="small" />}
        {children}
      </Stack>
      {!alert && onClose && (
        <CloseButton
          onClick={(e) => onClose(e, 'escapeKeyDown')}
          size="small"
          neutral
          {...closeButtonProps}
          variant="text"
          icon={faClose}
        />
      )}
    </MuiDialogTitle>
  );
};

DialogTitle.displayName = 'DialogTitle';

export default DialogTitle;
