import styled from 'styled-components';
import { Button as AtomButton } from '@/components/atoms';

export const Buttons = styled('div')`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

export const Button = styled(AtomButton)`
  width: fit-content;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;
