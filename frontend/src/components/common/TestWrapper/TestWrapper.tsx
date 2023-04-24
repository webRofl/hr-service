import React, { FC, PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AbstractObject } from '@/types';
import { getTheme } from '@/style';

interface TestWrapperProps {
  defaultValues: AbstractObject;
  defaultRoute: string;
}

export const Default: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={getTheme('light')}>{children}</ThemeProvider>;
};

export const WithRouter: FC<PropsWithChildren<Pick<TestWrapperProps, 'defaultRoute'>>> = ({
  defaultRoute,
  children,
}) => {
  return (
    <MemoryRouter initialEntries={[defaultRoute]}>
      <Default>{children}</Default>
    </MemoryRouter>
  );
};

export const WithForm: FC<PropsWithChildren<Pick<TestWrapperProps, 'defaultValues'>>> = ({
  defaultValues,
  children,
}) => {
  const method = useForm({
    defaultValues,
  });

  return (
    <FormProvider {...method}>
      <Default>{children}</Default>
    </FormProvider>
  );
};

export const WithAll: FC<PropsWithChildren<TestWrapperProps>> = ({
  defaultValues,
  defaultRoute,
  children,
}) => {
  const method = useForm({
    defaultValues,
  });

  return (
    <MemoryRouter initialEntries={[defaultRoute]}>
      <FormProvider {...method}>
        <Default>{children}</Default>
      </FormProvider>
    </MemoryRouter>
  );
};
