import styled, { css } from 'styled-components';
import { Grid } from '@mui/material';
import { styleMixins } from '@/style';

interface FullSizeGridProps {
  heightException: boolean | number;
}

export const FullSizeGrid = styled(Grid)<FullSizeGridProps>`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  ${({ heightException }) =>
    typeof heightException === 'number'
      ? styleMixins.customSizeScroll(heightException, 'rem')
      : typeof heightException === true
      ? styleMixins.fullSizeScroll
      : ''};

  ${({ theme }) => theme.breakpoints.up('xs')} {
    background-color: #fff;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    background-color: #f4f4f4;
  }
`;

const marginxMixin = css`
  margin-top: 40px;
  margin-bottom: 40px;
`;

interface ComponentContainerProps {
  isBigForm: boolean;
}

export const ComponentContainer = styled(Grid)<ComponentContainerProps>`
  max-width: 70rem;
  width: 100%;
  background-color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  ${marginxMixin};

  ${({ isBigForm }) =>
    isBigForm
      ? `
      padding-top: 0;
      padding-bottom: 1rem;
      `
      : `
      padding-top: 6rem;
      padding-bottom: 6rem;
  `};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    box-shadow: 0 0 5px #ddd;
  }
`;

export const ContentGrid = styled(Grid)`
  justify-content: space-between;
  margin-inline: auto;
  ${marginxMixin};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 45rem;
  }
`;

export const FormContainer = styled(Grid)`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    border-right: 1px solid #ddd;
  }
`;
