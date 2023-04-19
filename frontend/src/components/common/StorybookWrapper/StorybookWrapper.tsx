import React, { FC, PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import { AbstractObject } from '@/types';
import { getTheme } from '@/style';
import Router from '@/Router';

interface StorybookWrapperProps {
  defaultValues?: AbstractObject;
  withRouter?: boolean;
}

const StorybookWrapper: FC<PropsWithChildren<StorybookWrapperProps>> = ({
  defaultValues,
  children,
}) => {
  const method = useForm({ defaultValues });

  return (
    <FormProvider {...method}>
      <CssBaseline />
      <ThemeProvider theme={getTheme('light')}>{children}</ThemeProvider>
    </FormProvider>
  );
};

export default StorybookWrapper;
