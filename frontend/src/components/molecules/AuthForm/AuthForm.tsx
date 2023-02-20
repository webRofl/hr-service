import LoadingButton from '@mui/lab/LoadingButton';
import { Typography, Box } from '@mui/material';
import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { FormInput } from 'components/atoms';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks';
import { ILogin, loginSchema } from './schema';
import * as SC from './AuthForm.style';

const AuthContainer: FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const methods = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    const loginData = {
      email: values.email!,
      password: values.password!,
    };

    login(loginData).then(() => {
      navigate('/projects');
    });
  };

  return (
    <FormProvider {...methods}>
      <Box
        display="flex"
        flexDirection="column"
        component="form"
        noValidate
        autoComplete="off"
        sx={{ paddingRight: { sm: '3rem' } }}
        onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <Typography variant="h6" component="h1" sx={SC.LoginText}>
          Log into your account
        </Typography>

        <FormInput
          label="Enter your email"
          type="email"
          name="email"
          placeholder="Type your login"
          required
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          placeholder="Type your password"
          required
        />

        <LoadingButton loading={false} type="submit" variant="contained" sx={SC.LoadingBtn}>
          Login
        </LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default AuthContainer;
