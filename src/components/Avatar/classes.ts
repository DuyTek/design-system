export const internalAvatarClasses = {
  labelContainer: 'BrandAvatar-LabelContainer',
  primaryText: 'BrandAvatar-PrimaryText',
  secondaryText: 'BrandAvatar-SecondaryText',
};

export const brandAvatarClasses = {
  container: 'BrandAvatar-Container',
  labelContainer: internalAvatarClasses.labelContainer,
  primaryText: `${internalAvatarClasses.labelContainer} .${internalAvatarClasses.primaryText}`,
  secondaryText: `${internalAvatarClasses.labelContainer} .${internalAvatarClasses.secondaryText}`,
};
