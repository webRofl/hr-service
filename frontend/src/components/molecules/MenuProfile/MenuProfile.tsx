import React, { CSSProperties, FC } from 'react';
import { MenuItem } from '@/components/molecules';
import { useTheme } from 'styled-components';
import { useAuthStore, useLocalStorageState } from '@/store';
import * as SC from './MenuProfile.style';

interface IMenuProfileProps {
  isOpen: boolean;
}

const MenuProfile: FC<IMenuProfileProps> = ({ isOpen }) => {
  const theme = useTheme();
  const { isAuth } = useAuthStore(({ isAuth }) => ({ isAuth }));
  const { username } = useLocalStorageState(({ username }) => ({ username }));

  const signInStyles: CSSProperties = {
    backgroundColor: theme.gray.main,
    position: 'absolute',
    bottom: '4%',
  };

  if (!isAuth) {
    return (
      <MenuItem label="Sign-In" iconName="menu_sign-in" isShowLabel={isOpen} style={signInStyles} />
    );
  }

  return (
    <div style={signInStyles}>
      <SC.Username>{username}</SC.Username>
      <span>this should be user photo</span>
    </div>
  );
};

export default MenuProfile;
