import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import { IconComponent } from '@/components/common';
import { useAuthState, useLocalStorageState, useProfileState } from '@/store';
import { ProfileType, ROUTES } from '@/core';
import { useAuth } from '@/hooks';
import * as SC from './MobileMenu.style';

interface ProfileSectionProps {
  isAuth: boolean;
  image: string;
  profileType: ProfileType;
  userId: string;
}

const ProfileSection: FC<ProfileSectionProps> = ({ isAuth, image, profileType, userId }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate(ROUTES.MAIN);
  };

  const handleClickProfile = () => {
    if (profileType === 'employee') {
      navigate(`${ROUTES.EMPLOYEE_PROFILE}/${userId}`);
      return;
    }
    navigate(`${ROUTES.EMPLOYER_PROFILE}/${userId}`);
  };

  const navigateToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  if (!isAuth) {
    return (
      <SC.Item
        onClick={navigateToLogin}
        icon={<IconComponent fill="black" name="menu_sign-in" />}
      />
    );
  }

  return (
    <>
      <SC.Item onClick={handleClickProfile} icon={<SC.Img src={image} alt="profile logo" />} />
      <SC.Item onClick={logoutHandler} icon={<IconComponent fill="black" name="menu_sign-in" />} />
    </>
  );
};

const MobileMenu: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuth, profileType } = useAuthState(({ isAuth, profileType }) => ({
    isAuth,
    profileType,
  }));
  const { userId } = useLocalStorageState(({ userId }) => ({
    userId,
  }));
  // @ts-expect-error invalid profile state types
  const { image, responses } = useProfileState(({ image, responses }) => ({ image, responses }));

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  const isCurrentItem = (name: string) => {
    return !!name.match(location.pathname.slice(1));
  };

  return (
    <SC.Container onChange={handleChange}>
      <SC.Item
        value={ROUTES.PROJECTS}
        iscurrent={isCurrentItem('menu_projects')}
        icon={<IconComponent fill="black" name="menu_projects" />}
      />
      <SC.Item
        iscurrent={isCurrentItem('menu_candidates')}
        value={ROUTES.CANDIDATES}
        icon={<IconComponent fill="black" name="menu_candidates" />}
      />
      {profileType === 'employer' && (
        <SC.Item
          iscurrent={isCurrentItem('menu_responses')}
          value={ROUTES.RESPONSES}
          icon={
            <Badge badgeContent={responses?.length} color="primary">
              <IconComponent fill="black" name="menu_responses" />
            </Badge>
          }
        />
      )}
      <ProfileSection isAuth={isAuth} image={image!} profileType={profileType!} userId={userId} />
    </SC.Container>
  );
};

export default MobileMenu;
