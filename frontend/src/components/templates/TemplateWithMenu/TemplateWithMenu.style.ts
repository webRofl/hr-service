import { styleMixins } from '@/style';
import { Box } from '@mui/material';
import styled from 'styled-components';

interface ContainerBoxProps {
  issmup: boolean;
}

export const ContainerBox = styled(Box)<ContainerBoxProps>`
  display: flex;
  background: rgb(2, 0, 36);
  ${({ issmup }) => !issmup && 'flex-direction: column-reverse'};
`;

export const ChildrenBox = styled(Box)<ContainerBoxProps>`
  flex-grow: 1;
  background-color: white;
  border-radius: 8px;
  margin: 1rem;
  ${({ issmup }) => issmup && 'margin-left: 0'};
  ${styleMixins.fullSizeScroll};
  position: relative;
`;
