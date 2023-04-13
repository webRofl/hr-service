import { css } from 'styled-components';

export const btnMixin = css`
  background-color: ${({ theme }) => theme.blue.main};
  border-radius: 4px;
  height: 48px;
`;

export const firstLetterUp = css`
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const blockStyle = css`
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  border-radius: 8px;
`;

export const menuItem = css`
  ${btnMixin};
  width: 75%;
`;

export const fullSizeScroll = css`
  max-height: calc(100vh - 2rem);
  overflow-y: scroll;
`;
