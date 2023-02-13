/* eslint-disable react/no-children-prop */
import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TemplateWithMenu, AuthTemplate } from 'components/templates';
import { Candidates, Projects } from './components/organisms';
import { Redirect } from './components/common';

const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <TemplateWithMenu children={<Redirect path="/projects" />} />,
    },
    {
      path: '/projects',
      element: <TemplateWithMenu children={<Projects />} />,
    },
    {
      path: '/candidates',
      element: <TemplateWithMenu children={<Candidates />} />,
    },
    {
      path: 'sign-in',
      element: <AuthTemplate />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
