import { styleMixins } from '@/style';
import styled from 'styled-components';

export const GridItem = styled('div')`
  ${styleMixins.blockStyle}
`;

export const BriefInfo = styled(GridItem)`
  padding: 1rem 1.5rem;
  padding-top: 0.5rem;
`;

export const Title = styled('h1')`
  line-height: 1rem;
`;

export const Salary = styled('h4')`
  font-weight: 500;
  font-size: 18px;
  line-height: 1rem;
`;
