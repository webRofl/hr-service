import { IconComponent } from '@/components/common';
import { styleMixins } from '@/style';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const MenuItemBtn = styled(Button)`
  ${styleMixins.btnMixin};
  background-color: inherit;
  width: 100%;
`;

export const MenuItemIcon = styled(IconComponent)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.white.main};
`;
