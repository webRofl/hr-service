import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Menu } from 'components/organisms';
import { useExternalRouter } from '@/hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as SC from './TemplateWithMenu.style';

const TemplateWithMenu: FC<PropsWithChildren> = ({ children }) => {
  const { action } = useExternalRouter('isNeedToCreateProfile');

  useEffect(() => {
    action();
  }, [action]);

  return (
    <SC.ContainerBox>
      <Menu />
      <SC.ChildrenBox component="main">
        <ToastContainer />
        {children}
      </SC.ChildrenBox>
    </SC.ContainerBox>
  );
};

export default TemplateWithMenu;
