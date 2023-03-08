import React, { CSSProperties, FC } from 'react';
import { MenuItem } from '@/components/molecules';
import { useTheme } from 'styled-components';
import { useAuthState, useLocalStorageState, useProfileState } from '@/store';
import { Button } from '@/components/atoms';
import { useNavigate } from 'react-router-dom';
import * as SC from './MenuProfile.style';

interface IMenuProfileProps {
  isOpen: boolean;
}

const MenuProfile: FC<IMenuProfileProps> = ({ isOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuthState(({ isAuth, setIsAuth }) => ({ isAuth, setIsAuth }));
  const { username, setRefreshToken } = useLocalStorageState(({ username, setRefreshToken }) => ({
    username,
    setRefreshToken,
  }));
  const { image } = useProfileState(({ image }) => ({ image }));

  const signInStyles: CSSProperties = {
    backgroundColor: theme.gray.main,
    position: 'absolute',
    bottom: '4%',
  };

  const handleClickProfile = () => {
    navigate('/profile');
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
      <div onClick={handleClickProfile} role="presentation">
        {isOpen && <span style={{ color: '#fff' }}>{username}</span>}
        <SC.Img src={`http://localhost:8000${image}`} alt="menu profile logo" />
      </div>
      <Button
        onClick={logoutHandler}
        isShowLabel={isOpen}
        label="Log Out"
        iconName="menu_sign-in"
      />
    </SC.ProfileContainer>
  );
};

export default MenuProfile;
