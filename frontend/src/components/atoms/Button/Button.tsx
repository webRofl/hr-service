import React, { FC } from 'react';
import * as SC from './Button.style';

interface IButtonProps {
  label: string;
  isShowLabel?: boolean;
  iconName?: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ label, isShowLabel = true, iconName, onClick }) => {
  return (
    <SC.MenuItemBtn
      variant="contained"
      onClick={onClick}
      startIcon={iconName && <SC.MenuItemIcon name={iconName} />}>
      {isShowLabel && label}
    </SC.MenuItemBtn>
  );
};

export default Button;
