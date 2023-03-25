import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { MenuItem } from '@/components/molecules';
import { useTheme } from 'styled-components';
import { useAuthState, useLocalStorageState, useProfileState } from '@/store';
import { useNavigate, useLocation } from 'react-router-dom';
import { OptionsMenu } from '@/components/common';
import * as SC from './MenuProfile.style';

interface IMenuProfileProps {
  isOpen: boolean;
}

const MenuProfile: FC<IMenuProfileProps> = ({ isOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth, setIsAuth } = useAuthState(({ isAuth, setIsAuth }) => ({ isAuth, setIsAuth }));
  const { username, setRefreshToken, setUserId } = useLocalStorageState(
    ({ username, setRefreshToken, setUserId }) => ({
      username,
      setRefreshToken,
      setUserId,
    }),
  );
  const { image } = useProfileState(({ image }) => ({ image }));

  const ref = React.useRef<HTMLDivElement>(null);

  const signInStyles: CSSProperties = {
    backgroundColor: theme.gray.main,
    position: 'absolute',
    bottom: '4%',
  };

  const logoutHandler = () => {
    setUserId('');
    setIsAuth(false);
    setRefreshToken('');

    if (location.pathname === '/profile') {
      navigate('/');
    }
  };

  if (!isAuth) {
    return (
      <MenuItem label="Login" iconName="menu_sign-in" isShowLabel={isOpen} style={signInStyles} />
    );
  }
  return (
    <SC.ProfileContainer>
      <SC.Profile ref={ref} role="presentation">
        {isOpen && <span style={{ color: '#fff' }}>{username}</span>}
        <SC.Img src={`http://localhost:8000${image}`} alt="menu profile logo" />
      </SC.Profile>
      <MenuItem
        onClick={logoutHandler}
        optional={{ variant: 'outlined' }}
        isShowLabel={isOpen}
        isLink={false}
        label="Log Out"
        iconName="menu_sign-in"
      />
      <OptionsMenu
        stack={[
          ['profile', '/profile'],
          ['projects', '/profile/projects'],
        ]}
        ref={ref}
      />
    </SC.ProfileContainer>
  );
};

export default MenuProfile;
