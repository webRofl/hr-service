import { Grid } from '@mui/material';
import React from 'react';
import { AuthForm, OAuthContainer } from 'components/molecules';
import * as SC from './Auth.style';

const Auth = () => {
  return (
    <SC.FullSizeGrid container>
      <SC.ComponentContainer item>
        <SC.ContentGrid item container rowSpacing={5}>
          <SC.FormContainer item xs={12} sm={6}>
            <AuthForm />
          </SC.FormContainer>
          <Grid item xs={12} sm={6}>
            <OAuthContainer />
          </Grid>
        </SC.ContentGrid>
        <SC.SupportContainer>
          <SC.SignUpTypography>
            Need an account?
            <SC.LinkItem to="/sign-up"> Sign up here</SC.LinkItem>
          </SC.SignUpTypography>
          <SC.ForgotPasswordTypography>
            <SC.LinkItem to="/forgot-password">Forgot your password?</SC.LinkItem>
          </SC.ForgotPasswordTypography>
        </SC.SupportContainer>
      </SC.ComponentContainer>
    </SC.FullSizeGrid>
  );
};

export default Auth;
