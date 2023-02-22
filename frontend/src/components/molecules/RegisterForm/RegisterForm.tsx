import { FormInput } from '@/components/atoms';
import { useAuth } from '@/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IRegisterSchema, registerSchema } from './RegisterForm.schema';
import * as SC from './RegisterForm.style';

const RegisterForm = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string[]> | undefined>(undefined);

  const methods = useForm<IRegisterSchema>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  });

  const onSubmitHandler: SubmitHandler<IRegisterSchema> = async (values: IRegisterSchema) => {
    const errorMsg = await register(values);
    setErrors(errorMsg);

    if (!errorMsg) {
      navigate('/login');
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
          Register new account
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

        <FormInput
          type="text"
          label="Username"
          name="username"
          placeholder="Type your username"
          required
        />

        {errors && Object.values(errors).map((e) => <span>{e}</span>)}
        <LoadingButton loading={false} type="submit" variant="contained" sx={SC.LoadingBtn}>
          Register
        </LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default RegisterForm;
