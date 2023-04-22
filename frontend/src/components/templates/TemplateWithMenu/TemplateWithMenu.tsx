import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Menu, MobileMenu } from 'components/organisms';
import { ToastContainer } from 'react-toastify';
import { useExternalRouter, useMediaQueryWithBreakpoint } from '@/hooks';
import 'react-toastify/dist/ReactToastify.css';
import * as SC from './TemplateWithMenu.style';

const TemplateWithMenu: FC<PropsWithChildren> = ({ children }) => {
  const { action } = useExternalRouter('isNeedToCreateProfile');
  const matches = useMediaQueryWithBreakpoint('sm');

  useEffect(() => {
    action();
  }, [action]);

  return (
    <SC.ContainerBox issmup={matches}>
      {matches ? <Menu /> : <MobileMenu />}
      <SC.ChildrenBox component="main" issmup={matches}>
        <ToastContainer />
        {children}
      </SC.ChildrenBox>
    </SC.ContainerBox>
  );
};

export default TemplateWithMenu;
