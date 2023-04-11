/* eslint-disable react/no-children-prop */
import React, { FC } from 'react';
import { RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { TemplateWithMenu, AuthTemplate } from 'components/templates';
import {
  Candidates,
  CreateProjectForm,
  ProfileProjects,
  ProjectPage,
  Projects,
} from './components/organisms';
import { Redirect } from './components/common';
// eslint-disable-next-line max-len
import CreateProfileTemplate from './components/templates/CreateProfileTemplate/CreateProfileTemplate';
import ProfileTemplate from './components/templates/ProfileTemplate/ProfileTemplate';
import { ROUTES } from './core';
import Responses from './components/organisms/Responses/Responses';

const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.MAIN,
      element: <Redirect path={ROUTES.PROJECTS} />,
    },
    {
      path: ROUTES.LOGIN,
      element: <AuthTemplate />,
    },
    {
      path: ROUTES.REGISTER,
      element: <AuthTemplate />,
    },
    {
      path: ROUTES.PROJECTS,
      element: <TemplateWithMenu children={<Projects />} />,
    },
    {
      path: ROUTES.PROJECT_ID,
      element: <TemplateWithMenu children={<ProjectPage />} />,
    },
    {
      path: ROUTES.PROFILE_CREATE,
      element: <CreateProfileTemplate />,
    },
    {
      path: ROUTES.CANDIDATES,
      element: <TemplateWithMenu children={<Candidates />} />,
    },
    {
      path: ROUTES.EMPLOYEE_PROFILE_WITH_ID,
      element: <TemplateWithMenu children={<ProfileTemplate profileType="employee" />} />,
    },
    {
      path: ROUTES.EMPLOYER_PROFILE_WITH_ID,
      element: <TemplateWithMenu children={<ProfileTemplate profileType="employer" />} />,
    },
    {
      path: ROUTES.PROJECT_CREATE,
      element: <TemplateWithMenu children={<CreateProjectForm />} />,
    },
    {
      path: ROUTES.PROJECTS,
      element: <TemplateWithMenu children={<ProfileProjects />} />,
    },
    {
      path: ROUTES.RESPONSES,
      element: <TemplateWithMenu children={<Responses />} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
