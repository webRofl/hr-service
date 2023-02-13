/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { Theme } from '@mui/material/styles';
import { CustomThemeType } from './theme';

declare module '@mui/material/styles' {
  interface Theme extends CustomThemeType {}
  interface ThemeOptions extends CustomThemeType {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
