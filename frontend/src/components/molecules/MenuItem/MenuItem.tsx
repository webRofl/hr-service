import { Button } from '@/components/atoms';
import React, { FC } from 'react';
import * as SC from './MenuItem.style';
import { IMenuItemProps } from './MenuItem.type';

const MenuItem: FC<IMenuItemProps> = ({
  label,
  iconName,
  isShowLabel,
  onClick,
  optional,
  style = {},
  isLink = true,
}) => {
  const button = (
    <Button
      label={label}
      iconName={iconName}
      isShowLabel={isShowLabel}
      projectStyles
      {...optional}
    />
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
