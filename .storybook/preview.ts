import type { Preview } from '@storybook/html-vite'

import '@scottish-government/design-system/dist/css/design-system.css';
import '@scottish-government/design-system/dist/scripts/design-system.js';

const viewportSizes = {
  smalldown: {
    name: 'Small mobile',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  small: {
    name: 'Large mobile',
    styles: {
      width: '480px',
      height: '854px',
    },
  },
  medium: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  large: {
    name: 'Desktop',
    styles: {
      width: '992px',
      height: '1024px',
    },
  },
  xlarge: {
    name: 'Large desktop',
    styles: {
      width: '1200px',
      height: '1024px',
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      disableSaveFromUI: true,
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    },

    backgrounds: {
        grid: {
            cellSize: 16,
            opacity: 0.25,
            cellAmount: 4,
            offsetX: 30, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
            offsetY: 40, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        },
    },

    options: {
      storySort: {
        method: 'alphabetical'
      }
    },

    viewport: {
      options: {
        ...viewportSizes,
      },
    }
  },
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs']
};

export default preview;
