/* eslint-disable react/no-children-prop */
import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TemplateWithMenu, AuthTemplate } from 'components/templates';
import {
  Candidates,
  Profile,
  ProfileProjects,
  ProjectPage,
  Projects,
} from './components/organisms';
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
      path: '/projects/:projectId',
      element: <TemplateWithMenu children={<ProjectPage />} />,
    },
    {
      path: '/candidates',
      element: <TemplateWithMenu children={<Candidates />} />,
    },
    {
      path: '/login',
      element: <AuthTemplate />,
    },
    {
      path: '/register',
      element: <AuthTemplate />,
    },
    {
      path: '/profile/:profileId?',
      element: <TemplateWithMenu children={<Profile />} />,
    },
    {
      path: '/profile/:profileId?/projects',
      element: <TemplateWithMenu children={<ProfileProjects />} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
