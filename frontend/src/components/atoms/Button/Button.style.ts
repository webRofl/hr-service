import { IconComponent } from '@/components/common';
import { styleMixins } from '@/style';
import { LoadingButton } from '@mui/lab';
import styled from 'styled-components';

interface MenuItemBtnProps {
  projectstyles: boolean;
}

export const MenuItemBtn = styled(LoadingButton)<MenuItemBtnProps>`
  ${({ projectstyles }) => {
    const styles = `${styleMixins.btnMixin};
                    background-color: inherit;
                    width: 100%;

                    &:hover {
                      background-color: inherit;
                    }
                    `;
    return projectstyles ? styles : '';
  }}
  border: none;
  gap: 0.5rem;

  &:hover {
    border: none;
  }
`;

export const MenuItemIcon = styled(IconComponent)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.white.main};
`;
