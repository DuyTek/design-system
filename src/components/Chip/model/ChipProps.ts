import { ChipProps as MuiChipProps } from '@mui/material';
import { ReactElement } from 'react';

type SemanticColors =
  | 'semBlue'
  | 'semGreen'
  | 'semRed'
  | 'semOrange'
  | 'semGray';
type CategoryColors =
  | 'catYellow'
  | 'catPurple'
  | 'catBlue'
  | 'catGreen'
  | 'catRed'
  | 'catGray';

type VariantColorMap = {
  filled: SemanticColors | CategoryColors;
  ghost: CategoryColors;
};

export type ChipVariant = keyof VariantColorMap;

export interface ChipProps<
  V extends keyof VariantColorMap | undefined = 'filled',
> extends Omit<
    MuiChipProps,
    'variant' | 'deleteIcon' | 'onDelete' | 'color' | 'icon'
  > {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  color?: V extends keyof VariantColorMap ? VariantColorMap[V] : never;
  variant?: V;
}
