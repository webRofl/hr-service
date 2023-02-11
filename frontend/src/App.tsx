import React, { FC, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main, AuthTemplate } from 'components/templates';
import { GlobalENV } from '@/types';

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: 'sign-in',
      element: <AuthTemplate />,
    },
  ]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(GlobalENV.FQDN_API);
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
