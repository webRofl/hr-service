import React, { FC } from 'react';
import * as SC from './MenuItem.style';

interface IMenuItemProps {
  label: string;
  iconName?: string;
  isOpen: boolean;
}

const MenuItem: FC<IMenuItemProps> = ({ label, iconName, isOpen }) => {
  return (
    <SC.MenuItemContainer to={`/${label.toLowerCase()}`}>
      <SC.MenuItemBtn
        variant="contained"
        startIcon={iconName && <SC.MenuItemIcon name={iconName} />}>
        {isOpen && label}
      </SC.MenuItemBtn>
    </SC.MenuItemContainer>
  );
};

export default MenuItem;
