import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  EmployeeProfile as EmployeeProfileComponent,
  EmployerProfile,
} from '@/components/organisms';
import { useProfileFetch } from '@/hooks';
import { ProfileType } from '@/core';
import { useProfileState } from '@/store';

interface ProfileTemplateProps {
  profileType: ProfileType;
}

// eslint-disable-next-line consistent-return
const ProfileTemplate: FC<ProfileTemplateProps> = ({ profileType }) => {
  const { profileId } = useParams();
  const { user } = useProfileState(({ user }) => ({ user }));
  const { profileData, setToggleToFetch } = useProfileFetch(profileId!, user, profileType);

  if (profileType === 'employee') {
    return (
      <EmployeeProfileComponent
        profileData={profileData}
        userId={user}
        setToggleToFetch={setToggleToFetch}
        profileId={profileId}
      />
    );
  }
  if (profileType === 'employer') {
    return <EmployerProfile profileData={profileData} profileId={profileId} userId={user} />;
  }
};

export default ProfileTemplate;
