import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AuthForm, AuthSupport, OAuthContainer } from 'components/molecules';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from '@/store';
import RegisterForm from '@/components/molecules/RegisterForm/RegisterForm';
import * as SC from './Auth.style';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === '/login');
  const { isAuth } = useAuthState(({ isAuth }) => ({ isAuth }));

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location]);

  useEffect(() => {
    if (location.pathname.match(/(login|register)/) && isAuth) {
      navigate('/projects');
    }
  }, [location, isAuth]);

  return (
    <SC.FullSizeGrid container>
      <SC.ComponentContainer item>
        <SC.ContentGrid item container rowSpacing={5}>
          <SC.FormContainer item xs={12} sm={6}>
            {isLogin ? <AuthForm /> : <RegisterForm />}
          </SC.FormContainer>
          <Grid item xs={12} sm={6}>
            <OAuthContainer title={`${isLogin ? 'Login' : 'Register'} with another provider:`} />
          </Grid>
        </SC.ContentGrid>
        {isLogin && <AuthSupport />}
      </SC.ComponentContainer>
    </SC.FullSizeGrid>
  );
};

export default Auth;
