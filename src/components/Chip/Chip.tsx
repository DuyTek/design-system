import React, { useCallback, useMemo } from 'react';
import {
  Box,
  BoxProps,
  ClickAwayListener,
  Chip as MuiChip,
  ChipProps as MuiChipProps,
  chipClasses,
  styled,
} from '@mui/material';
import {
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Icon from '../internal/Icon';
import { ChipProps, ChipVariant } from './model/ChipProps';

declare module '@mui/material/Chip' {
  export interface ChipPropsColorOverrides {
    blueA600: true;
    catBlueA600: true;
    catGrayA600: true;
    catGreenA600: true;
    catRedA600: true;
    catPurpleA600: true;
    catYellowA600: true;
    grayA600: true;
    greenA600: true;
    orangeA600: true;
    redA600: true;
  }
}

const StyledChip = styled(MuiChip)(({ theme, variant }) => ({
  ...(variant === 'filled' ? { backgroundColor: 'transparent' } : {}), // Ghost variant (Filled variant w.r.t MUI chip) has transparent background

  [`& .${chipClasses.deleteIcon}`]: {
    color: 'inherit',
    position: 'relative',
    inset: '-1px auto auto auto',
    margin: 0,
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
  },
}));

export const ghostStartIconClassname = 'BrandChip-ghostStartIcon';
const GhostStartIcon = styled((props: BoxProps) => (
  <Box {...props} className={clsx(props.className, ghostStartIconClassname)} />
))({
  backgroundColor: 'currentColor',
  width: 10,
  height: 10,
  borderRadius: '50%',
});

function toThemeColor(
  color: ChipProps<ChipVariant>['color'],
): MuiChipProps['color'] {
  switch (color) {
    case 'catBlue':
      return 'catBlueA600';
    case 'catGray':
      return 'catGrayA600';
    case 'catGreen':
      return 'catGreenA600';
    case 'catPurple':
      return 'catPurpleA600';
    case 'catRed':
      return 'catRedA600';
    case 'catYellow':
      return 'catYellowA600';
    case 'semBlue':
      return 'blueA600';
    case 'semGray':
      return 'grayA600';
    case 'semGreen':
      return 'greenA600';
    case 'semOrange':
      return 'orangeA600';
    case 'semRed':
      return 'redA600';
    default:
      return 'blueA600';
  }
}

const ChevronDown = <Icon icon={faChevronDown} size="small" />;
const ChevronUp = <Icon icon={faChevronUp} size="small" />;

const Chip = <V extends ChipVariant>(props: ChipProps<V>) => {
  const {
    clickable,
    color: chipColor,
    endIcon: endIconProp,
    onClick,
    startIcon: startIconProp,
    variant: variantProp = 'filled',
    ...others
  } = props;
  const themeColor = toThemeColor(chipColor);
  const interactive = onClick && clickable;
  const [chevronIcon, setChevronIcon] =
    React.useState<React.ReactElement>(ChevronDown);

  const getChipVariant = (): MuiChipProps['variant'] => {
    switch (variantProp) {
      case 'ghost':
        return 'filled';
      case 'filled':
        return 'outlined';
      default:
        return 'outlined';
    }
  };

  const startIcon = useMemo(
    () => {
      if (variantProp === 'ghost' && !startIconProp) {
        return <GhostStartIcon />;
      }

      return startIconProp;
    },
    [startIconProp, variantProp],
  );

  const endIcon = useMemo(
    () => endIconProp ?? (interactive ? chevronIcon : undefined),
    [chevronIcon, endIconProp, interactive],
  );

  const handleOnClickAway = useCallback(() => {
    if (interactive) setChevronIcon(ChevronDown);
  }, [interactive]);

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (interactive) {
        setChevronIcon((prev) => (prev === ChevronDown ? ChevronUp : ChevronDown));
        onClick(e);
      }
    },
    [interactive, onClick],
  );
  return (
    <ClickAwayListener onClickAway={handleOnClickAway}>
      <StyledChip
        clickable={!!interactive}
        color={themeColor}
        deleteIcon={endIcon}
        icon={startIcon}
        onClick={handleOnClick}
        onDelete={interactive ? handleOnClick : undefined}
        variant={getChipVariant()}
        {...others}
      />
    </ClickAwayListener>
  );
};

export default Chip;
