import React, { CSSProperties, FC } from 'react';
import * as SC from './MenuItem.style';

interface IMenuItemProps {
  label: string;
  iconName?: string;
  isOpen: boolean;
  style?: CSSProperties | undefined;
}

const MenuItem: FC<IMenuItemProps> = ({ label, iconName, isOpen, style }) => {
  return (
    <SC.MenuItemContainer to={`/${label.toLowerCase()}`} style={style}>
      <SC.MenuItemBtn
        variant="contained"
        startIcon={iconName && <SC.MenuItemIcon name={iconName} />}>
        {isOpen && label}
      </SC.MenuItemBtn>
    </SC.MenuItemContainer>
  );
};

export default MenuItem;
