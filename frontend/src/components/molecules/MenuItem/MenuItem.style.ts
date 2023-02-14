import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Icon } from '@/components/common';
import { styleMixins } from '@/style';

const btnMixin = css`
  ${styleMixins.btnMixin};
`;

export const MenuItemContainer = styled(Link)`
  ${btnMixin};
  width: 75%;
`;

export const MenuItemBtn = styled(Button)`
  ${btnMixin};
  background-color: inherit;
  width: 100%;
`;

export const MenuItemIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.white.main};
`;
