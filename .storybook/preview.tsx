import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '../src/styles/global.css';

import React from 'react';
import type { Preview } from '@storybook/react';
import { BrandUiProvider } from '../src/components/internal/BrandUiProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      exclude: ['classes', 'component', 'onChange', 'sx', 'slots', 'slotProps'],
    },
    options: {
      storySort: (a, b) =>
        a.title === b.title ?
          0
          : a.title.localeCompare(b.title, undefined, { numeric: true }),
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrandUiProvider>
        <div style={{ padding: '20px 40px' }}>
          <Story />
        </div>
      </BrandUiProvider>
    ),
  ],
};

export default preview;
