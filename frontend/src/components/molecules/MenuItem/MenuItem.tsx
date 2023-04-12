import React, { FC } from 'react';
import { Badge } from '@mui/material';
import { Button } from '@/components/atoms';
import * as SC from './MenuItem.style';
import { IMenuItemProps } from './MenuItem.type';

const MenuItem: FC<IMenuItemProps> = ({
  label,
  iconName,
  isShowLabel,
  badgeContent,
  badgeColor,
  onClick,
  optional,
  style = {},
  isLink = true,
}) => {
  const button = (
    <Badge color="default" badgeContent={badgeContent}>
      <Button
        label={label}
        iconName={iconName}
        isShowLabel={isShowLabel}
        badgeContent={badgeContent}
        badgeColor={badgeColor}
        projectStyles
        {...optional}
      />
    </Badge>
  );

  const setStyles = () => {
    const SCStyle = optional?.variant && (SC as Record<string, unknown>)[optional.variant];
    return Object.assign(style || {}, SCStyle);
  };

  if (!isLink) {
    return (
      <SC.Block style={setStyles()} onClick={onClick}>
        {button}
      </SC.Block>
    );
  }

  return (
    <SC.Link to={`/${label.toLowerCase()}`} style={setStyles()} onClick={onClick}>
      {button}
    </SC.Link>
  );
};

export default MenuItem;
