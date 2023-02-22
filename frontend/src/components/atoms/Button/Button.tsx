import React, { FC } from 'react';
import * as SC from './Button.style';

interface IButtonProps {
  label: string;
  isShowLabel?: boolean;
  iconName?: string;
}

const Button: FC<IButtonProps> = ({ label, isShowLabel = true, iconName }) => {
  return (
    <SC.MenuItemBtn variant="contained" startIcon={iconName && <SC.MenuItemIcon name={iconName} />}>
      {isShowLabel && label}
    </SC.MenuItemBtn>
  );
};

export default Button;
