import styled, { keyframes } from 'styled-components';
import { Divider as MUIDivider } from '@mui/material';
import { styleMixins } from '@/style';

export const Container = styled('div')`
  ${styleMixins.blockStyle};
  height: 10rem;
  width: 10rem;
  transition: 0.5s all;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 8px 24px rgb(69, 69, 80);
  }
`;

export const Title = styled('div')`
  font-size: 30px;
  font-weight: 600;
  margin-left: 1rem;
`;

export const Text = styled('div')`
  margin-left: 1rem;
  overflow: hidden;
`;

const modalContainerAnimation = keyframes`
  0% { transform: scale(0%); }
  100% { transform: scale(100%); }
`;

export const ModalContainer = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  animation-name: ${modalContainerAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
`;

export const ModalContent = styled('div')`
  position: relative;
  background-color: white;
  min-height: 50%;
  height: fit-content;
  width: 50%;
  border-radius: 8px;
  padding: 1rem;
  font-size: 20px;
`;

export const ModalTitle = styled(Title)`
  margin: 0;
`;

export const Divider = styled(MUIDivider)`
  color: ${({ theme }) => theme.gray.light};
`;

export const ModalCross = styled('span')`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 30px;
  line-height: 1rem;
`;
