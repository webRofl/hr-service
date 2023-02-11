import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { FormInput } from 'components/atoms';
import { ILogin, loginSchema } from './schema';

const AuthContainer: FC = () => {
  const methods = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    // eslint-disable-next-line no-console
    console.log(values);
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
        <Typography variant="h6" component="h1" sx={{ textAlign: 'center', mb: '1.5rem' }}>
          Log into your account
        </Typography>

        <FormInput label="Enter your email" type="email" name="email" focused required />
        <FormInput type="password" label="Password" name="password" required focused />

        <LoadingButton
          loading={false}
          type="submit"
          variant="contained"
          sx={{
            py: '0.8rem',
            mt: 2,
            width: '80%',
            marginInline: 'auto',
          }}>
          Login
        </LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default AuthContainer;
