import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { styled } from '@mui/material/styles';
import React, { useMemo } from 'react';
import clsx from 'clsx';
import { iconClasses } from '@mui/material/Icon';
import helper from './helper';
import sysColors from './Token/Color/system';

export type IconProps = Omit<FontAwesomeIconProps, 'icon' | 'size'> &
  Partial<Pick<FontAwesomeIconProps, 'icon'>> & {
    /**
     * @description
     * large - 40px, medium - 24px, small - 16px, extraSmall - 12px, tiny - 10px
     */
    size?: 'large' | 'medium' | 'small' | 'extraSmall' | 'tiny';

    /**
     * @description Custom SVG icon component to render instead of FontAwesome icons
     * Use `createSvgIcon` from '@mui/material'
     */
    svg?: React.ComponentType<any>;
  };

const colorTokens = helper.getObjectKeyValues(sysColors);

const ICON_SIZES_PIXEL = {
  large: 38,
  medium: 22,
  small: 14,
  extraSmall: 10,
  tiny: 8,
};

const BaseIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  margin: theme.spacing(0.25),
}));

const LargeIcon = styled(BaseIcon)({
  width: ICON_SIZES_PIXEL.large,
  height: ICON_SIZES_PIXEL.large,
});

const MediumIcon = styled(BaseIcon)({
  width: ICON_SIZES_PIXEL.medium,
  height: ICON_SIZES_PIXEL.medium,
});

const SmallIcon = styled(BaseIcon)({
  width: ICON_SIZES_PIXEL.small,
  height: ICON_SIZES_PIXEL.small,
});

const TinyIcon = styled(BaseIcon)({
  width: ICON_SIZES_PIXEL.tiny,
  height: ICON_SIZES_PIXEL.tiny,
});

const ExtraSmallIcon = styled(BaseIcon)({
  width: ICON_SIZES_PIXEL.extraSmall,
  height: ICON_SIZES_PIXEL.extraSmall,
});

const Icon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    className,
    color: colorProp,
    icon,
    size = 'medium',
    svg: SvgComponent,
    ...rest
  } = props;
  const color = useMemo<string>(() => {
    const foundColor = colorTokens.find(({ key }) => key === colorProp);
    if (foundColor) {
      return foundColor.value;
    }
    return colorProp;
  }, [colorProp]);

  if (SvgComponent) {
    return (
      <SvgComponent
        ref={ref}
        className={clsx(className, iconClasses.root)}
        sx={{
          width: ICON_SIZES_PIXEL[size],
          height: ICON_SIZES_PIXEL[size],
          color,
        }}
      />
    );
  }

  if (typeof icon === 'undefined') {
    return null;
  }

  let SizedIcon: typeof LargeIcon;
  switch (size) {
    case 'large':
      SizedIcon = LargeIcon;
      break;
    case 'small':
      SizedIcon = SmallIcon;
      break;
    case 'tiny':
      SizedIcon = TinyIcon;
      break;
    case 'extraSmall':
      SizedIcon = ExtraSmallIcon;
      break;
    default:
      SizedIcon = MediumIcon;
  }

  return (
    <SizedIcon
      ref={ref}
      className={clsx(className, iconClasses.root)}
      color={color}
      icon={icon}
      {...rest}
    />
  );
});

export default Icon;
