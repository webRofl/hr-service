import styled, { CSSProperties, css } from 'styled-components';
import { Link as RRDLink } from 'react-router-dom';
import { styleMixins } from '@/style';
import { Button as MUIButton } from '@/components/atoms';

const MenuItem = css`
  ${styleMixins.btnMixin};
  width: 75%;
`;

export const Link = styled(RRDLink)`
  ${MenuItem};
  background-color: transparent;
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

interface ButtonProps {
  isMenuOpen: boolean;
  isCurrentItem: boolean;
}

export const Button = styled(MUIButton)<ButtonProps>`
  ${({ isMenuOpen }) => isMenuOpen && 'color: white'};
  ${({ isCurrentItem, isMenuOpen }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    isCurrentItem && isMenuOpen && 'box-shadow: 0px 0px 9px 2px white'};
`;
