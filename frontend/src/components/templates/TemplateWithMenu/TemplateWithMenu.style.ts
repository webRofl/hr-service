import { Box } from '@mui/material';
import styled from 'styled-components';

export const ContainerBox = styled(Box)`
  display: flex;
  background: rgb(2, 0, 36);
`;

export const ChildrenBox = styled(Box)`
  flex-grow: 1;
  background-color: white;
  border-radius: 8px;
  margin: 1rem;
  margin-left: 0;
  height: calc(100vh - 2rem);
  overflow-y: scroll;
`;
