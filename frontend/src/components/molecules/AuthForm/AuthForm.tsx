import LoadingButton from '@mui/lab/LoadingButton';
import { Typography, Box } from '@mui/material';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import { FormInput, ImagePicker } from 'components/atoms';
import { AxiosErrorResponse } from '@/types';
import { useLocation } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { objectUtils } from '@/utils';
import * as SC from './AuthForm.style';

interface IAuthFormProps {
  onSuccessSubmitHandler: () => void;
  methods: UseFormReturn<FieldValues, unknown>;
  dataLoadCb: (values: unknown) => Promise<AxiosResponse>;
  btnText: string;
  title?: string;
}

const AuthForm: FC<PropsWithChildren<IAuthFormProps>> = ({
  onSuccessSubmitHandler,
  methods,
  title,
  dataLoadCb,
  btnText,
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<AxiosErrorResponse>(undefined);
  const location = useLocation();

  useEffect(() => {
    setErrors(undefined);
  }, [location.pathname]);

  const onSubmitHandler = async (values: unknown) => {
    setIsLoading(true);

    const valuesWithValidFiles = objectUtils.convertAllFileListToFile(values);

    const data = await dataLoadCb(valuesWithValidFiles);
    setIsLoading(false);
    // eslint-disable-next-line no-unsafe-optional-chaining
    if (!data || Math.floor(data?.status / 100) === 2) {
      onSuccessSubmitHandler();
      return;
    }
    setErrors(data);
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
          {title}
        </Typography>

        {children}

        {Object.entries(methods.getValues()).map(([key, value]) => {
          if (value instanceof Blob) {
            return <ImagePicker name={key} />;
          }

          return <FormInput key={Math.random()} name={key} required />;
        })}

        {errors && Object.values(errors).map((e) => <span>{e}</span>)}

        <LoadingButton loading={isLoading} type="submit" variant="contained" sx={SC.LoadingBtn}>
          {btnText}
        </LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default AuthForm;
