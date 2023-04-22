import { Grid } from '@mui/material';
import styled from 'styled-components';
import { styleMixins } from '@/style';
import { DivInput } from '@/components/common';
import { Button } from '@/components/atoms';

export const Container = styled(Grid)`
  position: relative;
  ${styleMixins.blockStyle};
  color: ${({ theme }) => theme.gray.dark};
  min-height: 13rem;
  padding-left: 2rem;
  padding-top: 1rem;
  margin-bottom: 1rem;
  font-size: 20px;
`;

export const Title = styled(DivInput)`
  font-size: 35px;
  font-weight: 600;
`;

export const Link = styled('a')`
  color: ${({ theme }) => theme.gray.dark};
  text-decoration: none;
`;

export const Right = styled('div')`
  position: absolute;
  top: 0.2rem;
  right: 0.5rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: sticky;
  }
`;

export const ProjectsCount = styled('div')`
  display: flex;
  gap: 1rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    gap: 0.5rem;
  }
`;

export const RatingBlock = styled('div')`
  display: flex;
`;

export const TotalVotes = styled('span')`
  margin-left: 0.5rem;
`;

export const Image = styled('img')`
  border-radius: 6px;
  height: 10rem;
`;

export const ViewProjects = styled(Button)`
  display: block;
  margin-bottom: 1rem;
`;
