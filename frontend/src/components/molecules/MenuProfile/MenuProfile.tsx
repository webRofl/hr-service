import React, { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MenuItem } from '@/components/molecules';
import { useAuthState, useLocalStorageState, useProfileState } from '@/store';
import { OptionsMenu } from '@/components/common';
import { ROUTES } from '@/core';
import { useAuth } from '@/hooks';
import * as SC from './MenuProfile.style';

interface IMenuProfileProps {
  isOpen: boolean;
}

const MenuProfile: FC<IMenuProfileProps> = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const { isAuth, profileType } = useAuthState(({ isAuth, profileType }) => ({
    isAuth,
    profileType,
  }));
  const { username, userId } = useLocalStorageState(({ username, userId }) => ({
    username,
    userId,
  }));
  // @ts-expect-error profile state type definition
  const { image } = useProfileState(({ image }) => ({ image }));

  const ref = React.useRef<HTMLDivElement>(null);

  const logoutHandler = () => {
    logout();

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
        {isOpen && <SC.Username>{username}</SC.Username>}
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
          profileType === 'employer' ? ['projects', `/profile/${userId}/projects`] : null,
        ]}
        ref={ref}
      />
    </SC.ProfileContainer>
  );
};

export default MenuProfile;
