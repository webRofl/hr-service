import React, { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocalStorageState } from '@/store';
import * as SC from './MenuItem.style';
import { IMenuItemProps } from './MenuItem.type';

const MenuItem: FC<IMenuItemProps> = memo(
  ({
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
    const { pathname } = useLocation();
    const { isMenuOpen } = useLocalStorageState(({ isMenuOpen }) => ({ isMenuOpen }));

    const button = (
      <SC.Button
        label={label}
        iconName={iconName}
        isShowLabel={isShowLabel}
        badgeContent={badgeContent}
        badgeColor={badgeColor}
        iscurrentitem={pathname.slice(1).toLocaleLowerCase() === label.toLowerCase()}
        ismenuopen={isMenuOpen}
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
  },
);

export default MenuItem;
