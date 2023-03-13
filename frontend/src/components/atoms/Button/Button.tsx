import { MUIButtonVariant } from '@/types';
import React, { FC } from 'react';
import * as SC from './Button.style';

interface IButtonProps {
  label: string;
  isShowLabel?: boolean;
  iconName?: string;
  variant?: MUIButtonVariant;

  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  label,
  isShowLabel = true,
  iconName,
  onClick,
  variant = 'contained',
}) => {
  return (
    <SC.MenuItemBtn
      variant={variant}
      onClick={onClick}
      startIcon={iconName && <SC.MenuItemIcon name={iconName} />}>
      {isShowLabel && label}
    </SC.MenuItemBtn>
  );
};

export default Button;
