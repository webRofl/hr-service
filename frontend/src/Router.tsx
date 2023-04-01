/* eslint-disable react/no-children-prop */
import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TemplateWithMenu, AuthTemplate } from 'components/templates';
import {
  Candidates,
  CreateProjectForm,
  Profile,
  ProfileProjects,
  ProjectPage,
  Projects,
} from './components/organisms';
import { Redirect } from './components/common';
// eslint-disable-next-line max-len
import CreateProfileTemplate from './components/templates/CreateProfileTemplate/CreateProfileTemplate';

const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <TemplateWithMenu children={<Redirect path="/projects" />} />,
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
      path: '/projects',
      element: <TemplateWithMenu children={<Projects />} />,
    },
    {
      path: '/projects/:projectId',
      element: <TemplateWithMenu children={<ProjectPage />} />,
    },

    {
      path: '/profile/create',
      element: <CreateProfileTemplate />,
    },
    {
      path: '/candidates',
      element: <TemplateWithMenu children={<Candidates />} />,
    },
    {
      path: '/profile/:profileId?',
      element: <TemplateWithMenu children={<Profile />} />,
    },
    {
      path: '/profile/projects/create',
      element: <TemplateWithMenu children={<CreateProjectForm />} />,
    },
    {
      path: '/profile/:profileId?/projects',
      element: <TemplateWithMenu children={<ProfileProjects />} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
