import React from 'react';
import { styled, Theme } from '@mui/material/styles';
import { PrimaryTextProps } from '../model/PrimaryTextProps';
import { SecondaryTextProps } from '../model/SecondaryTextProps';
import { LabelProps } from '../model/LabelProps';
import { internalAvatarClasses } from '../classes';

const primaryTypo = (size: LabelProps['size'], theme: Theme) => {
  switch (size) {
    case 'extraSmall':
      return { ...theme.sys.typo2.body.small };
    case 'small':
    case 'userProfile':
      return { ...theme.sys.typo2.body.medium };
    case 'medium':
      return { ...theme.sys.typo2.body.large };
    case 'large':
      return { ...theme.sys.typo2.title.medium };
    case 'extraLarge':
    case 'accountProfile':
      return { ...theme.sys.typo2.headline };
    default:
      return {};
  }
};

const secondaryTypo = (size: LabelProps['size'], theme: Theme) => {
  switch (size) {
    case 'extraSmall':
      return { display: 'none' };
    case 'userProfile':
    case 'small':
      return { ...theme.sys.typo2.body.small };
    case 'medium':
      return { ...theme.sys.typo2.body.medium };
    case 'large':
      return { ...theme.sys.typo2.body.medium };
    case 'extraLarge':
    case 'accountProfile':
      return { ...theme.sys.typo2.title.large };
    default:
      return {};
  }
};

const PrimaryText = styled('div')<PrimaryTextProps>(({ size, theme }) => ({
  color: theme.refV2.neu.textdark[100],
  ...primaryTypo(size, theme),
}));

const SecondaryText = styled('div')<SecondaryTextProps>(({ size, theme }) => ({
  color: theme.refV2.neu.textdark[400],
  ...secondaryTypo(size, theme),
}));

const LabelContainer = styled('div')<{ size?: LabelProps['size'] }>(
  ({ theme, size }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(0.5),
    width: '100%',
    height: '100%',
    marginLeft:
      size === 'extraSmall' || size === 'small' ?
        theme.spacing(1)
        : theme.spacing(2),
  }),
);

export const CustomLabel = ({
  primaryText,
  secondaryText,
  size,
}: LabelProps) => (
  <LabelContainer size={size} className={internalAvatarClasses.labelContainer}>
    <PrimaryText className={internalAvatarClasses.primaryText} size={size}>
      {primaryText}
    </PrimaryText>
    <SecondaryText className={internalAvatarClasses.secondaryText} size={size}>
      {secondaryText}
    </SecondaryText>
  </LabelContainer>
);

export default CustomLabel;
