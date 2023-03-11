import { styleMixins } from '@/style';
import styled from 'styled-components';

export const GridItem = styled('div')`
  ${styleMixins.blockStyle}
`;

export const BriefInfo = styled(GridItem)`
  padding: 1rem 1.5rem;
  padding-top: 0.5rem;
`;
