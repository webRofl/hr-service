import styled from 'styled-components';

export const TextArea = styled('textarea')`
  border: 1px solid ${({ theme }) => theme.gray.dark};
  font-size: 20px;
  color: ${({ theme }) => theme.gray.main};
  min-height: 15rem;
  height: max-content;
  width: 90%;
  outline: none;
  border-radius: 6px;
  padding: 0.5rem;
`;
