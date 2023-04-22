import React, { useEffect, useState } from 'react';
import { IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from 'styled-components';
import { MenuItem, MenuProfile } from '@/components/molecules';
import { useAuthState, useLocalStorageState } from '@/store';
import { ReactComponent as UnwrapSVG } from '@/assets/icons/menu_control_unwrap.svg';
import { ReactComponent as WrapSVG } from '@/assets/icons/menu_control_wrap.svg';
import * as SC from './Menu.style';

const Menu = () => {
  const theme = useTheme();
  const { isMenuOpen, setIsMenuOpen, responsesQuantityDifference } = useLocalStorageState(
    ({ isMenuOpen, setIsMenuOpen, responsesQuantityDifference }) => ({
      isMenuOpen,
      setIsMenuOpen,
      responsesQuantityDifference,
    }),
  );
  const { profileType } = useAuthState(({ profileType }) => ({ profileType }));
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpen, setIsOpen] = useState<boolean>(!matches && isMenuOpen);
  const [drawerWidth, setDrawerWidth] = useState<number>(window.innerWidth / 6);

  const toggleDrawerOpen = () => {
    setIsOpen((prev) => {
      setIsMenuOpen(!prev);
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
    <SC.Drawer variant="permanent" isopen={isOpen} drawerwidth={drawerWidth}>
      <SC.DrawerHeader>
        <IconButton color="success" aria-label="open drawer" onClick={toggleDrawerOpen}>
          {isOpen ? <WrapSVG style={SC.ocIcon} /> : <UnwrapSVG style={SC.ocIcon} />}
        </IconButton>
      </SC.DrawerHeader>
      <SC.MenuContainer
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}>
        <MenuItem label="Projects" iconName="menu_projects" isShowLabel={isOpen} />
        <MenuItem label="Candidates" iconName="menu_candidates" isShowLabel={isOpen} />
        {profileType === 'employer' && (
          <MenuItem
            label="Responses"
            iconName="menu_responses"
            isShowLabel={isOpen}
            badgeContent={responsesQuantityDifference || undefined}
            badgeColor="info"
          />
        )}
        <MenuProfile isOpen={isOpen} />
      </SC.MenuContainer>
    </SC.Drawer>
  );
};

export default Menu;
