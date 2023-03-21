import React, { CSSProperties, FC } from 'react';
import { MUIButtonVariant } from '../../../types';
import * as SC from './Button.style';

interface IButtonProps {
  label: string;
  isShowLabel?: boolean;
  iconName?: string;
  variant?: MUIButtonVariant;
  style?: CSSProperties;

  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  label,
  isShowLabel = true,
  iconName,
  onClick,
  style,
  variant = 'contained',
}) => {
  return (
    <SC.MenuItemBtn
      variant={variant}
      onClick={onClick}
      style={style}
      startIcon={iconName && <SC.MenuItemIcon name={iconName} />}>
      {isShowLabel && label}
    </SC.MenuItemBtn>
  );
};

export default Button;
