import { styled } from '@mui/material/styles';
import React from 'react';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { iconClasses } from '@mui/material/Icon';
import clsx from 'clsx';
import { TextFieldCustomLabelProps } from './model/TextFieldCustomLabelProps';
import Icon from '../internal/Icon';
import Tooltip from '../internal/Tooltip';
import BrandTextFieldClasses from './classes';

const InnerContainer = styled('label')<TextFieldCustomLabelProps>(
  ({ disabled, theme }) => {
    let textColor = theme.refV2.neu.textdark[100];
    let iconColor = theme.refV2.neu.textdark[600];
    if (disabled) {
      // eslint-disable-next-line prefer-destructuring
      textColor = theme.refV2.neu.textlight[100];
      // eslint-disable-next-line prefer-destructuring
      iconColor = theme.refV2.neu.textlight[100];
    }

    return {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
      color: textColor,
      ...theme.sys.typo.label.small,
      [`.${iconClasses.root}`]: {
        fontSize: 14,
        margin: theme.spacing(0, 1),
        color: iconColor,
      },
      width: '100%',
      gap: theme.spacing(0.5),
    };
  },
);

const LabelContentWrapper = styled('div')<{ required?: boolean, withTooltipIcon?: boolean }>(({
  required,
  withTooltipIcon,
}) => {
  let spaceToLeave = 0;

  if (!required) {
    spaceToLeave += 60;
  }

  if (withTooltipIcon) {
    spaceToLeave += 22;
  }

  return {
    maxWidth: `calc(100% - ${spaceToLeave}px)`,
  };
});

const LabelContent = styled('p')({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: 0,
  marginBottom: 0,
});

const AfterLabelContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 0,
});

const OptionalText = styled('span')({
  width: 'fit-content',
});

const TextFieldCustomLabel: React.FC<TextFieldCustomLabelProps> = ({
  children,
  className,
  required,
  tooltipLabel,
  disabled,
  ...props
}) => (
  <InnerContainer
    disabled={disabled}
    className={clsx(className, BrandTextFieldClasses.label)}
    {...props}
  >
    <LabelContentWrapper required={required} withTooltipIcon={!!tooltipLabel}>
      <Tooltip title={children}>
        <LabelContent>{children}</LabelContent>
      </Tooltip>
    </LabelContentWrapper>
    {children && (
      <AfterLabelContent>
        {!required && <OptionalText>(optional)</OptionalText>}
        {tooltipLabel && (
          <Tooltip
            title={!disabled && tooltipLabel}
            placement="right"
            className={BrandTextFieldClasses.labelIcon}
            PopperProps={{
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 4],
                  },
                },
              ],
            }}
          >
            <Icon icon={faCircleInfo} size="small" />
          </Tooltip>
        )}
      </AfterLabelContent>
    )}
  </InnerContainer>
);

export default TextFieldCustomLabel;
