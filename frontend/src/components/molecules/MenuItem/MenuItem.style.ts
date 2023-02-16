import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { styleMixins } from '@/style';
import { IconComponent } from '@/components/common';

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

export const MenuItemIcon = styled(IconComponent)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.white.main};
`;
