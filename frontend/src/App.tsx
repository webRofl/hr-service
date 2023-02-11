import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main, AuthTemplate } from 'components/templates';

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

  return <RouterProvider router={router} />;
};

export default App;
