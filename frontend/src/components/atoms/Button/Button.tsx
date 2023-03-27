import React, { FC } from 'react';
import * as SC from './Button.style';
import { Props } from './Button.types';

const Button: FC<Props> = ({
  label,
  iconName,
  isShowLabel = true,
  projectStyles = false,
  isLoading = false,
  ...muiButtonProps
}) => {
  return (
    <SC.MenuItemBtn
      loading={isLoading}
      {...muiButtonProps}
      projectStyles={projectStyles}
      startIcon={iconName && <SC.MenuItemIcon name={iconName} />}>
      {isShowLabel && label}
    </SC.MenuItemBtn>
  );
};

export default Button;
