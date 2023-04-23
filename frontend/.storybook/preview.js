import { jsxDecorator } from 'storybook-addon-jsx';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { getTheme } from '../src/style/theme';

const preview = {
  parameters: {
    decorators: [
      jsxDecorator,
      withThemeFromJSXProvider({
        GlobalStyles: createGlobalStyle``,
        themes: {
          light: getTheme('light'),
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
      }),
    ],
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
