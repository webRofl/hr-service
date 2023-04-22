import { styleMixins } from '@/style';
import { Grid } from '@mui/material';
import { CSSProperties } from 'react';
import styled from 'styled-components';

export const RelativeGrid = styled(Grid)`
  position: relative;
`;

export const BriefInfo = styled('div')`
  padding: 1rem 1.5rem;
  padding-top: 0.5rem;
  ${styleMixins.blockStyle}

  ${({ theme }) => theme.breakpoints.down('sm')} {
    box-shadow: none;
  }
`;

export const title = {
  fontWeight: 600,
  fontSize: '1.6rem',
};

export const Salary = styled('h4')`
  font-weight: 500;
  font-size: 18px;
  line-height: 1rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    line-height: 2rem;
    margin: 0;
  }
`;

export const ProjectRate = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const experience = {
  display: 'inline',
};

export const ProjectTotalVotes = styled('span')`
  padding-bottom: 2px;
  font-size: 18px;
  margin-left: 0.5rem;
`;

export const ProjectImg = styled('img')`
  width: 15rem;
  position: absolute;
  right: 1rem;
  top: 1.5rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: static;
  }
`;

export const AuthorBlock = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${styleMixins.blockStyle}
`;

export const Img = styled('img')`
  width: 7rem;
  border-radius: 50%;
`;

export const ProfileBtn: CSSProperties = {
  width: '60%',
  marginTop: '1rem',
  marginBottom: '1rem',
};
