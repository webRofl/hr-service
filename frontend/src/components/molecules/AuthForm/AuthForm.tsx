import LoadingButton from '@mui/lab/LoadingButton';
import { Typography, Box } from '@mui/material';
import React, { FC, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const methods = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler: SubmitHandler<ILogin> = async (values: ILogin) => {
    setIsLoading(true);

    const loginData = {
      email: values.email!,
      password: values.password!,
    };

    const errorMsg = await login(loginData);

    setIsLoading(false);

    setError(errorMsg);

    if (!errorMsg) {
      navigate('/projects');
    }
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
        <span>{error}</span>

        <LoadingButton loading={isLoading} type="submit" variant="contained" sx={SC.LoadingBtn}>
          Login
        </LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default AuthContainer;
