import React from 'react';
import * as SC from './AuthSupport.style';

const AuthSupport = () => {
  return (
    <SC.Container>
      <SC.SignUp>
        Need an account?
        <SC.LinkItem to="/register"> Sign up here</SC.LinkItem>
      </SC.SignUp>
      <SC.ForgotPassword>
        <SC.LinkItem to="/forgot-password">Forgot your password?</SC.LinkItem>
      </SC.ForgotPassword>
    </SC.Container>
  );
};

export default AuthSupport;
