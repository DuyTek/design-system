import { CardMedia as MuiCardMedia, styled } from '@mui/material';

const CardMedia = styled(MuiCardMedia)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export default CardMedia;
