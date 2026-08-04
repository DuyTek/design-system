import clsx from 'clsx';
import React from 'react';
import { styled } from '@mui/material/styles';
import { tabClasses, tabsClasses } from '@mui/material';
import { BRAND_TAB_LEVEL_2, BRAND_TAB_LEVEL_1, getClassname } from '../utils';
import { TabListProps, TabsProps } from '../model';

const withTabsStyles = <P extends TabsProps | TabListProps>(
  WrappedComponent: React.FC<P>,
) => {
  const StyledTablist = styled(WrappedComponent, {
    shouldForwardProp: (name) => name !== 'align' && name !== 'level',
  })(({ align, theme, variant }) => ({
    [`& .${tabsClasses.flexContainer}`]: {
      justifyContent: align,
    },

    [`&.${BRAND_TAB_LEVEL_2} `]: {
      [`& .${tabsClasses.indicator}`]: {
        display: 'none',
      },
      [`&.${tabsClasses.root}`]: {
        background: theme.ref.palette.blue.b98,
        width: variant !== 'fullWidth' ? 'max-content' : 'auto',
        borderRadius: theme.ref.border.radius.moderate,
        height: 'auto',
        minHeight: 'auto',
      },
      [`.${tabClasses.root}`]: {
        color: theme.refV2.neu.textlight[100],
        height: theme.spacing(6),
        minHeight: theme.spacing(6),
        margin: theme.ref.measure.spacing1,
        borderRadius: theme.ref.border.radius.moderate,
        fontSize: theme.ref.typo.font.size12,
        padding: theme.spacing(1, 4),
        ':hover': {
          color: theme.refV2.pri.blue[500],
        },
        ':focus-visible': {
          outlineColor: theme.refV2.pri.blue_a[600],
          outlineWidth: '2px',
          outlineStyle: 'solid',
        },
      },
      [`.${tabClasses.selected}`]: {
        color: theme.refV2.pri.blue[500],
        backgroundColor: theme.ref.palette.neutral.b100,
        boxShadow: theme.sys.elevation.low,
      },
      [`& .${tabClasses.disabled}`]: {
        color: theme.refV2.neu.textlight[300],
      },
    },

    [`&.${BRAND_TAB_LEVEL_1}`]: {
      [`& .${tabsClasses.indicator}`]: {
        backgroundColor: theme.refV2.pri.blue[500],
      },
      [`.${tabClasses.root}`]: {
        color: theme.refV2.neu.textlight[100],
        textTransform: 'uppercase',
        height: theme.ref.measure.spacing8,
        minHeight: theme.ref.measure.spacing8,
        fontWeight: theme.ref.typo.font.weight.bold,
        fontSize: theme.ref.typo.font.size12,
        minWidth: 'fit-content',
        padding: 0,
        ':hover': {
          color: theme.refV2.pri.blue[500],
        },
        '&:not(:last-child)': {
          marginRight: theme.ref.measure.spacing3,
        },
        ':focus-visible': {
          backgroundColor: theme.refV2.pri.bluelight[600],
        },
      },
      [`&.${tabsClasses.root}`]: {
        height: theme.ref.measure.spacing8,
        minHeight: theme.ref.measure.spacing8,
      },
      [` .${tabClasses.selected}`]: {
        color: theme.refV2.pri.blue[500],
      },
      [`& .${tabClasses.disabled}`]: {
        color: theme.refV2.neu.textlight[300],
      },
      borderBottom: `1px solid ${theme.refV2.neu.stroke[400]}`,
    },
  }));

  const WithTabsStyles: React.FC<P> = (props) => {
    const { className, level } = props;
    return (
      <StyledTablist
        {...props}
        className={clsx(className, getClassname(level))}
      />
    );
  };

  return WithTabsStyles;
};

export default withTabsStyles;
