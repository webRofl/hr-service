/* eslint-disable implicit-arrow-linebreak */
import React, { FC, Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Preloader, Redirect } from '@/components/common';
import { ROUTES } from '@/core';

const Auth = lazy(() => import('@/components/pages').then(({ Auth }) => ({ default: Auth })));
const Candidates = lazy(() =>
  import('@/components/pages').then(({ Candidates }) => ({ default: Candidates })),
);
const CreateProfile = lazy(() =>
  import('@/components/pages').then(({ CreateProfile }) => ({ default: CreateProfile })),
);
const CreateProject = lazy(() =>
  import('@/components/pages').then(({ CreateProject }) => ({ default: CreateProject })),
);
const EmployeeProfile = lazy(() =>
  import('@/components/pages').then(({ EmployeeProfile }) => ({ default: EmployeeProfile })),
);
const EmployerProfile = lazy(() =>
  import('@/components/pages').then(({ EmployerProfile }) => ({ default: EmployerProfile })),
);
const ProfileProjects = lazy(() =>
  import('@/components/pages').then(({ ProfileProjects }) => ({ default: ProfileProjects })),
);
const ProjectPage = lazy(() =>
  import('@/components/pages').then(({ ProjectPage }) => ({ default: ProjectPage })),
);
const Projects = lazy(() =>
  import('@/components/pages').then(({ Projects }) => ({ default: Projects })),
);
const Responses = lazy(() =>
  import('@/components/pages').then(({ Responses }) => ({ default: Responses })),
);

const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.MAIN,
      element: <Redirect path={ROUTES.PROJECTS} />,
    },
    {
      path: ROUTES.LOGIN,
      element: <Auth />,
    },
    {
      path: ROUTES.REGISTER,
      element: <Auth />,
    },
    {
      path: ROUTES.PROJECTS,
      element: <Projects />,
    },
    {
      path: ROUTES.PROJECT_ID,
      element: <ProjectPage />,
    },
    {
      path: ROUTES.PROFILE_CREATE,
      element: <CreateProfile />,
    },
    {
      path: ROUTES.CANDIDATES,
      element: <Candidates />,
    },
    {
      path: ROUTES.EMPLOYEE_PROFILE_WITH_ID,
      element: <EmployeeProfile />,
    },
    {
      path: ROUTES.EMPLOYER_PROFILE_WITH_ID,
      element: <EmployerProfile />,
    },
    {
      path: ROUTES.PROJECT_CREATE,
      element: <CreateProject />,
    },
    {
      path: ROUTES.PROFILE_PROJECTS_WITH_ID,
      element: <ProfileProjects />,
    },
    {
      path: ROUTES.RESPONSES,
      element: <Responses />,
    },
  ]);

  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
