import { css } from 'styled-components';

const btnMixin = css`
  background-color: ${({ theme }) => theme.blue.main};
  border-radius: 4px;
  height: 48px;
`;

export const styleMixins = {
  btnMixin,
};
