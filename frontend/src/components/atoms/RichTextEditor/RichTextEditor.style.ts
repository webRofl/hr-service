import styled from 'styled-components';

export const Preview = styled('div')`
  .ql-align-center {
    text-align: center;
  }

  .ql-align-right {
    text-align: right;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 2rem;
  }
`;
