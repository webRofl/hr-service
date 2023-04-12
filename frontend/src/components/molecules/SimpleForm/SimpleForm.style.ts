import styled from 'styled-components';
import { Button as AtomButton } from '@/components/atoms';

export const Form = styled('form')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(AtomButton)`
  position: absolute;
  bottom: 1rem;
`;
