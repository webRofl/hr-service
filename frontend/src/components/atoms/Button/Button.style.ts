import { IconComponent } from '@/components/common';
import { styleMixins } from '@/style';
import { LoadingButton } from '@mui/lab';
import styled from 'styled-components';

interface MenuItemBtnProps {
  projectStyles: boolean;
}

export const MenuItemBtn = styled(LoadingButton)<MenuItemBtnProps>`
  ${({ projectStyles }) => {
    const styles = `${styleMixins.btnMixin};
                    background-color: inherit;
                    width: 100%;

                    &:hover {
                      background-color: inherit;
                    }
                    `;
    return projectStyles ? styles : '';
  }}
`;

export const MenuItemIcon = styled(IconComponent)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.white.main};
`;
