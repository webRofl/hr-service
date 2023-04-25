import styled from 'styled-components';
import { styleMixins } from '@/style';

interface ImageContainerProps {
  width: number;
  height: number;
}

export const ImageContainer = styled('div')<ImageContainerProps>`
  position: relative;
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.gray.dark};
  border-radius: 6px;
  align-self: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

interface ImageControlProps {
  isVisible: boolean;
}

export const ImageControl = styled('input')<ImageControlProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  height: 2rem;
  font-size: ${({ isVisible }) => (isVisible ? '1.5rem' : '1rem')};
  transition: all 0.5s;
  border-radius: 6px;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(3rem)')};
`;

export const [ModalContainer, ModalContent] = styleMixins.ModalContainerAndContent();

export const ModalCross = styleMixins.CrossElement;
