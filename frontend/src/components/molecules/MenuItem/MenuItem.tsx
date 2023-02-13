import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MenuItemContainer, MenuItemIcon, MenuItemLabel } from './MenuItem.style';

interface IMenuItemProps {
  label: string;
  iconName?: string;
}

const MenuItem: FC<IMenuItemProps> = ({ label, iconName }) => {
  return (
    <Link to={`/${label.toLowerCase()}`}>
      <MenuItemContainer>
        {iconName && <MenuItemIcon name={iconName} />}
        <MenuItemLabel>{label}</MenuItemLabel>
      </MenuItemContainer>
    </Link>
  );
};

export default MenuItem;
