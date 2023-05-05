import { Button } from '@mui/material';
import styled, { CSSProperties, css } from 'styled-components';

const btnsMixin = css`
  min-width: 2.5rem;
  height: 2.5rem;
`;

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;
`;

export const logo: CSSProperties = {
  width: '14rem',
  height: '14rem',
  boxShadow: '0px 7px 9px 0px rgba(0, 0, 0, 0.2)',
  borderRadius: '50%',
};

export const Name = styled('div')`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.black.main};
  line-height: 30px;
`;

export const EditBtn = styled(Button)`
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  ${btnsMixin}

  &[data-isedit='true'] {
    box-shadow: ${({ theme }) => theme.boxShadow.dark};
  }
`;

export const SubmitBtn = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  ${btnsMixin}
  transition: .5s all;
  opacity: 0;

  &[data-isedit='true'] {
    opacity: 1;
  }
`;

export const editIconStyles = {
  width: 'inherit',
  height: 'inherit',
};
