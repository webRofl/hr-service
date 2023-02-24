import React, { CSSProperties, FC } from 'react';
import { MenuItem } from '@/components/molecules';
import { useTheme } from 'styled-components';
import { useAuthState, useLocalStorageState } from '@/store';
import { Button } from '@mui/material';
import * as SC from './MenuProfile.style';

interface IMenuProfileProps {
  isOpen: boolean;
}

const MenuProfile: FC<IMenuProfileProps> = ({ isOpen }) => {
  const theme = useTheme();
  const { isAuth, setIsAuth } = useAuthState(({ isAuth, setIsAuth }) => ({ isAuth, setIsAuth }));
  const { username, setRefreshToken } = useLocalStorageState(({ username, setRefreshToken }) => ({
    username,
    setRefreshToken,
  }));

  const signInStyles: CSSProperties = {
    backgroundColor: theme.gray.main,
    position: 'absolute',
    bottom: '4%',
  };

  const logoutBtnStyles: CSSProperties = {
    backgroundColor: theme.gray.main,
    width: '100%',
  };

  const logoutHandler = () => {
    setIsAuth(false);
    setRefreshToken('');
  };

  if (!isAuth) {
    return (
      <MenuItem label="Login" iconName="menu_sign-in" isShowLabel={isOpen} style={signInStyles} />
    );
  }

  return (
    <SC.ProfileContainer>
      <SC.Username>{username}</SC.Username>
      <Button variant="outlined" onClick={logoutHandler} sx={{ height: 48 }}>
        Logout
      </Button>
    </SC.ProfileContainer>
  );
};

export default MenuProfile;