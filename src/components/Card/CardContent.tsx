import { CardContent as MuiCardContent, styled } from '@mui/material';

const CardContent = styled(MuiCardContent)(({ theme }) => ({
  ...theme.sys.typo.body.small,
  padding: theme.spacing(0, 0, 4, 0),

  '&:last-child': {
    paddingBottom: theme.spacing(0),
  },
}));

export default CardContent;
