import { Card as MuiCard, styled } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { CardProps } from './models/CardProps';

const selectedCardClass = 'BrandCard-selected';

const PrivateCard = styled(MuiCard)(({ theme }) => ({
  padding: theme.spacing(4.5),
  border: `${theme.sys.border.solid} ${theme.refV2.neu.stroke[400]}`,
  borderRadius: theme.ref.border.radius.rounded,
  boxShadow: `0 0 0 0 ${theme.refV2.neu.bglight[900]}`,

  '&:hover': {
    background: theme.refV2.pri.bluelight[800],
  },

  [`&.${selectedCardClass}`]: {
    outline: `${theme.sys.border.solid_medium} ${theme.refV2.pri.blue[800]}`,
  },
}));

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { selected, ...rest } = props;

  return (
    <PrivateCard
      className={clsx(selected && selectedCardClass)}
      ref={ref}
      {...rest}
    />
  );
});

export default Card;
