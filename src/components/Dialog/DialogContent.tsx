import {
  DialogContent as MuiDialogContent,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';
import { DialogContentProps } from './model';

const Title = styled(Typography)(({ theme }) => ({
  color: theme.sys.color.on_surface.variant.default,
  marginBottom: theme.spacing(2),
  ...theme.sys.typo.label.medium,
}));
const DialogContent = ({ title, children, ...others }: DialogContentProps) => (
  <MuiDialogContent {...others}>
    {title && <Title>{title}</Title>}
    {children}
  </MuiDialogContent>
);

export default DialogContent;
