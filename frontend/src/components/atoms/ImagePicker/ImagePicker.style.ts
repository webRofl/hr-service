import styled from 'styled-components';

interface ContainerProps {
  imgLink: string;
}

export const Container = styled('div')<ContainerProps>`
  width: 10rem;
  height: 10rem;
  border-radius: 6px;
  background: ${({ imgLink }) => (imgLink.length ? `url(${imgLink})` : 'gray')};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Input = styled('input')`
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
