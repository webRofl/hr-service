import React, { useEffect, useState } from 'react';
import { Auth } from 'components/organisms';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from '@/store';
import { AuthSupport, OAuthContainer } from '@/components/molecules';
import { AbstractForm } from '@/components/common';

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
      renderBottom={isLogin && <AuthSupport />}
    />
  );
};

export default AuthTemplate;
