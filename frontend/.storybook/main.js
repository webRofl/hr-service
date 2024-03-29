const { mergeConfig } = require('vite');
const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-jsx',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-actions',
    'storybook-addon-react-router-v6',
    '@storybook/addon-styling',
    '@storybook/addon-ie11',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
      components: path.resolve(__dirname, '../src/components/'),
      types: path.resolve(__dirname, '../src/types'),
      assets: path.resolve(__dirname, '../src/assets'),
      utils: path.resolve(__dirname, '../src/utils/'),
      store: path.resolve(__dirname, '../src/store'),
      hooks: path.resolve(__dirname, '../src/hooks'),
    };
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['@storybook/addon-actions', '@storybook/addon-backgrounds'],
      },
    });
  },
  docs: {
    autodocs: true,
  },
};
