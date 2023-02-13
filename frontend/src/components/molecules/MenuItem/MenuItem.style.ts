import styled from 'styled-components';
import { StyleUtils } from '@/utils';
import { Icon } from '@/components/common';

export const MenuItemContainer = styled('div')`
  background-color: ${({ theme }) => theme.blue.main};
  border-radius: 4px;
  height: 48px;
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  color: red;
`;

export const MenuItemIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.white.main};
`;

export const MenuItemLabel = styled('span')`
  color: ${({ theme }) => theme.white.main};
  font-size: 16;
  font-weight: 500;
  line-height: 24px;
`;
