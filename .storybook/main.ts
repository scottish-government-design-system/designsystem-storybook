import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  framework: "@storybook/html-vite",
  staticDirs: ['../static'],
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  // @ts-expect-error type not provided by StoryBook for html-vite
  webpackFinal: (config) => {
    config.module.rules.push(
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {
              searchPaths: ''
            }
          }
        ]
      },
      {
        test: /\.ts|tsx$/,
        use: 'ts-loader'
      }
    );
    return config;
  }
};

export default config;
