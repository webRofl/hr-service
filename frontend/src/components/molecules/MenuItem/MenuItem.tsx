import { Button } from '@/components/atoms';
import React, { CSSProperties, FC } from 'react';
import * as SC from './MenuItem.style';

interface IMenuItemProps {
  label: string;
  isShowLabel: boolean;
  iconName?: string;
  style?: CSSProperties | undefined;

  onClick?: () => void;
}

const MenuItem: FC<IMenuItemProps> = ({ label, iconName, isShowLabel, style, onClick }) => {
  return (
    <SC.MenuItemContainer to={`/${label.toLowerCase()}`} style={style} onClick={onClick}>
      <Button label={label} iconName={iconName} isShowLabel={isShowLabel} />
    </SC.MenuItemContainer>
  );
};

export default MenuItem;
