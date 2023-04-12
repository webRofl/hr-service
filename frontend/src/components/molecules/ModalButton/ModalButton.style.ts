import { Modal } from '@mui/material';
import styled from 'styled-components';

export const ModalCross = styled('span')`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 30px;
  line-height: 1rem;
`;

export const ModalContainer = styled(Modal)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
