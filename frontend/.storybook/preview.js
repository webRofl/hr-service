import { jsxDecorator } from 'storybook-addon-jsx';

const preview = {
  parameters: {
    decorators: [jsxDecorator],
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export default preview;
