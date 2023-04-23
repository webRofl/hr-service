import React, { FC, PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AbstractObject } from '@/types';
import { getTheme } from '@/style';

interface TestWrapperProps {
  defaultValues?: AbstractObject;
  defaultRoute?: string;
}

const TestWrapper: FC<PropsWithChildren<TestWrapperProps>> = ({
  children,
  defaultRoute = '',
  defaultValues = {},
}) => {
  const method = useForm({
    defaultValues,
  });

  return (
    <MemoryRouter initialEntries={[defaultRoute]}>
      <ThemeProvider theme={getTheme('light')}>
        <FormProvider {...method}>{children}</FormProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

export default TestWrapper;
