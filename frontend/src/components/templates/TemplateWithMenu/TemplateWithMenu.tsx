import React, { FC, PropsWithChildren } from 'react';
import { Menu } from 'components/organisms';
import * as SC from './TemplateWithMenu.style';

const TemplateWithMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SC.ContainerBox>
      <Menu />
      <SC.ChildrenBox component="main">{children}</SC.ChildrenBox>
    </SC.ContainerBox>
  );
};

export default TemplateWithMenu;
