import React, { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MenuItem } from '@/components/molecules';
import { useAuthState, useLocalStorageState, useProfileState } from '@/store';
import { OptionsMenu } from '@/components/common';
import { ROUTES } from '@/core';
import * as SC from './MenuProfile.style';

interface IMenuProfileProps {
  isOpen: boolean;
}

const MenuProfile: FC<IMenuProfileProps> = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth, setIsAuth, profileType } = useAuthState(({ isAuth, setIsAuth, profileType }) => ({
    isAuth,
    setIsAuth,
    profileType,
  }));
  const { username, setRefreshToken, setUserId, userId } = useLocalStorageState(
    ({ username, setRefreshToken, setUserId, userId }) => ({
      username,
      setRefreshToken,
      setUserId,
      userId,
    }),
  );
  const { image } = useProfileState(({ image }) => ({ image }));

  const ref = React.useRef<HTMLDivElement>(null);

  const logoutHandler = () => {
    setUserId('');
    setIsAuth(false);
    setRefreshToken('');

    if (location.pathname === '/profile') {
      navigate(ROUTES.MAIN);
    }
  };

  if (!isAuth) {
    return (
      <MenuItem
        label="Login"
        iconName="menu_sign-in"
        isShowLabel={isOpen}
        style={SC.signInStyles}
      />
    );
  }
  return (
    <SC.ProfileContainer>
      <SC.Profile ref={ref} role="presentation">
        {isOpen && <span style={{ color: '#1976d2' }}>{username}</span>}
        <SC.Img src={image} alt="menu profile logo" />
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
          [
            'profile',
            profileType === 'employee'
              ? `${ROUTES.EMPLOYEE_PROFILE}/${userId}`
              : `${ROUTES.EMPLOYER_PROFILE}/${userId}`,
          ],
          ['projects', `/profile/${userId}/projects`],
        ]}
        ref={ref}
      />
    </SC.ProfileContainer>
  );
};

export default MenuProfile;
