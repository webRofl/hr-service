import React, { useEffect, useState } from 'react';
import { Auth } from 'components/organisms';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from '@/store';
import { AuthSupport, OAuthContainer } from '@/components/molecules';
import { AbstractForm } from '@/components/common';
import { ROUTES } from '@/core';
import * as SC from './AuthTemplate.style';

const AuthTemplate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === '/login');
  const { isAuth } = useAuthState(({ isAuth }) => ({ isAuth }));

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location]);

  useEffect(() => {
    if (isAuth) {
      navigate('/projects');
    }
  }, [location, isAuth]);

  return (
    <AbstractForm
      renderLeft={<Auth isLogin={isLogin} />}
      renderRight={
        <OAuthContainer title={`${isLogin ? 'Login' : 'Register'} with another provider:`} />
      }
      renderBottom={
        <SC.Bottom>
          {isLogin ? <AuthSupport /> : <SC.LinkItem to={ROUTES.LOGIN}>Back to login</SC.LinkItem>}
        </SC.Bottom>
      }
    />
  );
};

export default AuthTemplate;
