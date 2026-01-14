import type { Preview } from '@storybook/html-vite'

import '@scottish-government/design-system/dist/css/design-system.css';
import '@scottish-government/design-system/dist/scripts/design-system.js';

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
    }
  },
};

export default preview;
