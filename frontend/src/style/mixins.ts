import { css } from 'styled-components';

const btnMixin = css`
  background-color: ${({ theme }) => theme.blue.main};
  border-radius: 4px;
  height: 48px;
`;

const firstLetterUp = css`
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const blockStyle = css`
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  border-radius: 8px;
`;

export const styleMixins = {
  btnMixin,
  firstLetterUp,
  blockStyle,
};
