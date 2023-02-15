import React, { useEffect, useState } from 'react';
import { IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from 'styled-components';
import { MenuItem } from '@/components/molecules';
import { Icon } from '@/components/common';
import { useLocalStorage } from '@/hooks';
import * as SC from './Menu.style';

const Menu = () => {
  const theme = useTheme();
  const { LSGetter, LSSetter } = useLocalStorage();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpen, setIsOpen] = useState<boolean>(!matches && LSGetter('isMenuOpen') === 'true');
  const [drawerWidth, setDrawerWidth] = useState<number>(window.innerWidth / 6);

  const toggleDrawerOpen = () => {
    setIsOpen((prev) => {
      LSSetter('isMenuOpen', !prev);
      return !prev;
    });
  };

  useEffect(() => {
    if (matches) {
      setDrawerWidth(window.innerWidth);
    }
    const newDrawerWidth = window.innerWidth / 6 >= 240 ? window.innerWidth / 6 : 240;
    setDrawerWidth(newDrawerWidth);
  }, [window.innerWidth, matches]);

  return (
    <SC.Drawer variant="permanent" isOpen={isOpen} drawerWidth={drawerWidth}>
      <SC.DrawerHeader>
        <IconButton color="success" aria-label="open drawer" onClick={toggleDrawerOpen}>
          <Icon
            name={!isOpen ? 'menu_control_unwrap' : 'menu_control_wrap'}
            style={{ width: 30 }}
          />
        </IconButton>
      </SC.DrawerHeader>
      <SC.CustomDivider />
      <SC.MenuContainer
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}>
        <MenuItem label="Projects" iconName="menu_projects" isShowLabel={isOpen} />
        <MenuItem label="Candidates" iconName="menu_candidates" isShowLabel={isOpen} />
        <MenuItem
          label="Sign-In"
          iconName="menu_sign-in"
          isShowLabel={isOpen}
          style={{ backgroundColor: theme.gray.main, position: 'absolute', bottom: '4%' }}
        />
      </SC.MenuContainer>
    </SC.Drawer>
  );
};

export default Menu;
