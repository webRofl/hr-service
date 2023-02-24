import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Auth } from 'components/organisms';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from '@/store';
import { AuthSupport, OAuthContainer } from '@/components/molecules';
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
    <SC.FullSizeGrid container>
      <SC.ComponentContainer item>
        <SC.ContentGrid item container rowSpacing={5}>
          <SC.FormContainer item xs={12} sm={6}>
            <Auth isLogin={isLogin} />
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

export default AuthTemplate;
