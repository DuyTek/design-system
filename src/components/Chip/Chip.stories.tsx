import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { faFolder, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { fn, userEvent } from 'storybook/test';
import {
  Chip as MuiChip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import clsx from 'clsx';
import Chip, { ChipProps, ChipVariant } from '.';
import Icon from '../internal/Icon';

const chipColors = {
  semBlue: 'semBlue',
  semGreen: 'semGreen',
  semRed: 'semRed',
  semOrange: 'semOrange',
  semGray: 'semGray',
  catYellow: 'catYellow',
  catPurple: 'catPurple',
  catBlue: 'catBlue',
  catGreen: 'catGreen',
  catRed: 'catRed',
  catGray: 'catGray',
};

const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
  argTypes: {
    ref: { table: { disable: true } },
    component: { table: { disable: true } },
    clickable: {
      control: { type: 'boolean' },
      description: 'If true and `onClick` is defined, the chip is clickable.',
    },
    onClick: {
      description: 'If defined and `clickable` is true, the end icon will be shown.',
      options: ['function', 'none'],
      mapping: {
        function: fn,
        none: undefined,
      },
    },
    color: {
      control: { type: 'select' },
      options: Object.values(chipColors),
    },
    disabled: { control: { type: 'boolean' } },
    startIcon: {
      description: 'The start icon element.',
      options: ['ReactNode', 'none'],
      mapping: {
        ReactNode: <Icon icon={faFolder} size="small" />,
        none: undefined,
      },
    },
    endIcon: {
      description:
        'The end icon element. If it is undefined, `clickable` is true and `onClick` is defined, the chevron end icons will be shown.',
      options: ['icon', 'none'],
      mapping: {
        icon: <Icon icon={faChevronDown} size="small" />,
        none: undefined,
      },
    },
    variant: {
      control: 'select',
      options: ['filled', 'ghost'],
    },
  },
  parameters: {
    controls: {
      exclude: ['component'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const chip: Story = {
  args: {
    label: 'LABEL',
    color: 'semBlue',
    clickable: false,
    disabled: false,
    onClick: undefined,
    startIcon: undefined,
    endIcon: undefined,
  },
};

export const MUIChip: Story = {
  render: () => (
    <>
      <p>
        As our theme is different from MUI default theme, some tokens cannot be
        read by MUI. However, the two chips can be used independently without
        affecting each other.
      </p>
      <MuiChip label="MUI Chip" color="default" />
    </>
  ),
};

export const NonInteractive: Story = {
  args: {
    label: 'Non-interactive Chip',
    clickable: false,
  },
  render: (args) => (
    <>
      <Chip {...args} variant="filled" />
      <br />
      <Chip {...args} color="catBlue" variant="ghost" />
    </>
  ),
};

export const WithIcon: Story = {
  args: {
    label: 'Chip with icon',
    startIcon: <Icon icon={faFolder} size="small" />,
    endIcon: <Icon icon={faChevronDown} size="small" />,
    onClick: undefined,
  },
};
const ChipColors: ChipProps<ChipVariant>['color'][] = [
  'semBlue',
  'semGreen',
  'semRed',
  'semOrange',
  'semGray',
  'catYellow',
  'catPurple',
  'catBlue',
  'catGreen',
  'catRed',
  'catGray',
];

const semanticColors = ChipColors.filter((color) => color?.startsWith('sem'));
const categoricalColors = ChipColors.filter((color) => color?.startsWith('cat'));

const CustomTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell>Category</TableCell>
      <TableCell>Color</TableCell>
      <TableCell>Enabled</TableCell>
      <TableCell>Hovered</TableCell>
      <TableCell>Pressed</TableCell>
      <TableCell>Disabled</TableCell>
      <TableCell>Focused</TableCell>
    </TableRow>
  </TableHead>
);

const ChipCells = ({ color, className, ...prop }: ChipProps<ChipVariant>) => (
  <>
    <TableCell>{color}</TableCell>
    <TableCell>
      <Chip {...prop} color={color} label="Enabled" />
    </TableCell>
    <TableCell>
      <Chip
        {...prop}
        color={color}
        onClick={fn}
        label="Hovered"
        className="Storybook-hover"
      />
    </TableCell>
    <TableCell>
      <Chip
        {...prop}
        color={color}
        onClick={fn}
        label="Pressed"
        className={clsx(className, 'Storybook-active')}
      />
    </TableCell>
    <TableCell>
      <Chip {...prop} color={color} label="Disabled" disabled />
    </TableCell>
    <TableCell>
      <Chip
        {...prop}
        color={color}
        label="Focused"
        className={clsx(className, 'Storybook-focusVisible')}
      />
    </TableCell>
  </>
);

export const FilledChips: Story = {
  args: {
    clickable: true,
    onClick: fn(),
  },
  parameters: {
    controls: {
      exclude: ['variant'],
    },
  },
  render: ({ className, ...prop }) => (
    <Table>
      <CustomTableHead />
      <TableBody>
        {[
          { category: 'Semantic', colors: semanticColors },
          { category: 'Categorical', colors: categoricalColors },
        ].map(({ category, colors }) => (
          <React.Fragment key={category}>
            {colors.map((color, index) => (
              <TableRow key={color}>
                {index === 0 && (
                  <TableCell rowSpan={colors.length}>{category}</TableCell>
                )}
                <ChipCells {...prop} color={color} className={className} />
              </TableRow>
            ))}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  ),
};

export const GhostChips: Story = {
  args: {
    clickable: true,
    variant: 'ghost',
    onClick: fn(),
  },
  render: ({ className, ...prop }) => (
    <>
      The end icon of ghost chips is not swappable and only shown when the chip
      is clickable.
      <Table>
        <CustomTableHead />
        <TableBody>
          {categoricalColors.map((color, index) => (
            <TableRow key={color}>
              {index === 0 && (
                <TableCell rowSpan={categoricalColors.length}>
                  Categorical
                </TableCell>
              )}
              <ChipCells {...prop} color={color} className={className} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  ),
  parameters: {
    controls: {
      exclude: ['endIcon'],
    },
  },
  play: async ({ canvas }) => {
    userEvent.click(canvas.getAllByRole('button', { name: 'Enabled' })[0]);
  },
};
