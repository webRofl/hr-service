/* eslint-disable indent */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form';
import { AuthForm } from '@/components/molecules';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks';
import { useLocalStorageState } from '@/store';
import { loginSchema, registerSchema } from './Auth.schema';

interface IAuthProps {
  isLogin: boolean;
}

const Auth: FC<IAuthProps> = ({ isLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register } = useAuth();
  const { setIsNeedToCreateProfile } = useLocalStorageState(({ setIsNeedToCreateProfile }) => ({
    setIsNeedToCreateProfile,
  }));

  const getFields = (...fields: string[]) => {
    return fields.reduce((acc, curr) => {
      acc[curr] = '';
      return acc;
    }, {} as Record<string, string>);
  };

  const getMethods = (resolver: any, ...fields: string[]) => {
    return useForm<FieldValues>({
      resolver: yupResolver(resolver),
      defaultValues: getFields(...fields),
    });
  };

  const methods: Record<string, UseFormReturn<FieldValues, any>> = {
    login: getMethods(loginSchema, 'email', 'password'),
    register: getMethods(registerSchema, 'email', 'password', 'username'),
  };

  const onSuccessSubmitHandler = () => {
    if (isLogin) {
      navigate('/projects');
      return;
    }
    const values = methods.register.getValues();
    const signIn = async () => {
      await login({ email: values.email, password: values.password });
      setIsNeedToCreateProfile(true);
      // navigate('/profile/create');
    };

    signIn();
  };

  return (
    <AuthForm
      methods={methods[location.pathname.slice(1)]}
      title={isLogin ? 'Log into your account' : 'Register new account'}
      dataLoadCb={isLogin ? login : register}
      btnText={isLogin ? 'Login' : 'Register'}
      onSuccessSubmitHandler={onSuccessSubmitHandler}
    />
  );
};

export default Auth;
