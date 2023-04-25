import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
  EmployeeProfile as EmployeeProfileComponent,
  EmployerProfile,
} from '@/components/organisms';
import { ProfileType } from '@/core';
import { useProfileState } from '@/store';

interface ProfileTemplateProps {
  profileType: ProfileType;
}

// eslint-disable-next-line consistent-return
const ProfileTemplate: FC<ProfileTemplateProps> = ({ profileType }) => {
  const { profileId } = useParams();
  // @ts-expect-error invalid profile state types
  const { user } = useProfileState(({ user }) => ({ user }));

  if (profileType === 'employee') {
    return <EmployeeProfileComponent userId={user} profileId={profileId!} />;
  }
  if (profileType === 'employer') {
    return <EmployerProfile profileId={profileId!} userId={user} />;
  }

  return null;
};

export default ProfileTemplate;
