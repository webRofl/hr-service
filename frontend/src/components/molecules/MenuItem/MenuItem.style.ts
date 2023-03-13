import styled, { css } from 'styled-components';
import { Link as RRDLink } from 'react-router-dom';
import { styleMixins } from '@/style';

const MenuItem = css`
  ${styleMixins.btnMixin};
  width: 75%;
`;

export const Link = styled(RRDLink)`
  ${MenuItem};
`;

export const Block = styled('div')`
  ${MenuItem};
`;

// depends of button variant

export const outlined = {
  backgroundColor: 'transparent',
};

export const text = {
  ...outlined,
  borderColor: 'transparent',
};
