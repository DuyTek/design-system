import {
  CardHeader as MuiCardHeader,
  styled,
  typographyClasses,
} from '@mui/material';

const CardHeader = styled(MuiCardHeader)(({ theme }) => ({
  padding: theme.spacing(0, 0, 4, 0),

  [`& .${typographyClasses.root}`]: {
    ...theme.sys.typo.title.large,
  },
}));

export default CardHeader;
