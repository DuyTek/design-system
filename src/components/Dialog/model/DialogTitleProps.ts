import { DialogTitleProps as MuiDialogTitleProps } from '@mui/material/DialogTitle';
import { ButtonProps } from '../../Button';

type DialogTitleProps = MuiDialogTitleProps & {
  closeButtonProps?: ButtonProps;
  /**
   * If true, the dialog title will display an alert icon.
   * @default false
   */
  alert?: boolean;
};

export default DialogTitleProps;
