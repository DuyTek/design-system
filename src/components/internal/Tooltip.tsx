import React from 'react';
import { Tooltip as MuiTooltip, styled, tooltipClasses, TooltipProps as MuiTooltipProps } from '@mui/material';

export type TooltipProps = MuiTooltipProps & { maxWidth?: string };

const Tooltip = styled(
  ({
    className,
    placement = 'bottom',
    disableInteractive = true,
    ...props
  }: TooltipProps) => (
    <MuiTooltip
      disableInteractive={disableInteractive}
      placement={placement}
      slotProps={{
        popper: {
          popperOptions: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 0],
                },
              },
            ],
          },
        },
      }}
      {...props}
      classes={{ popper: className }}
    />
  ),
)(({ theme, maxWidth }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.refV2.neu.bgdark[500],
    borderRadius: theme.borderRadius.radiusRounded4px,
    boxShadow: theme.sys.elevation.low,
    color: theme.refV2.neu.textlight[900],
    height: 'auto',
    maxWidth: maxWidth ?? '300px',
    padding: theme.spacing(1, 2),
    ...theme.sys.typo2.body.medium,
  },
}));

export default Tooltip;
