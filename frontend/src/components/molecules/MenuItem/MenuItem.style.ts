import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { styleMixins } from '@/style';

export const MenuItemContainer = styled(Link)`
  ${styleMixins.btnMixin};
  width: 75%;
`;
