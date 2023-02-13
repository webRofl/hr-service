import React, { FC } from 'react';
import { MenuItem } from '@/components/molecules';
import { MenuContainer } from './Menu.style';

const Menu: FC = () => {
  return (
    <MenuContainer>
      <MenuItem label="Projects" iconName="menu_projects" />
      <MenuItem label="Candidates" iconName="menu_candidates" />
    </MenuContainer>
  );
};

export default Menu;
