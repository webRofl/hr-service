import React, { FC } from 'react';
import { Badge } from '@mui/material';
import * as SC from './Button.style';
import { Props } from './Button.types';

const Button: FC<Props> = ({
  label,
  iconName,
  isShowLabel = true,
  projectStyles = false,
  isLoading = false,
  badgeContent,
  badgeColor,
  ...muiButtonProps
}) => {
  return (
    <SC.MenuItemBtn
      loading={isLoading}
      {...muiButtonProps}
      projectStyles={projectStyles}
      startIcon={
        iconName && (
          <Badge badgeContent={badgeContent} color={badgeColor ?? 'default'}>
            <SC.MenuItemIcon name={iconName} />
          </Badge>
        )
      }>
      {isShowLabel && label}
    </SC.MenuItemBtn>
  );
};

export default Button;
