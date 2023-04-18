import { useState, useEffect } from 'react';
import { ProfileType } from '@/core';
import { useProfileState } from '@/store';
import { EmployeeProfile, EmployerProfileRetrieve } from '@/store/api/orvalGeneration/models';
import { ProfileReadFn } from '@/types';
import {
  usersEmployeeGetRead,
  usersEmployerGetRead,
} from '@/store/api/orvalGeneration/users/users';

interface UseProfileFetchReturn {
  profileData: EmployeeProfile | EmployerProfileRetrieve;
  setToggleToFetch: (prev: boolean) => void;
}

const useProfileFetch = (
  profileId: string,
  userId: string,
  profileType: ProfileType,
): UseProfileFetchReturn => {
  const { getState } = useProfileState(({ getState }) => ({ getState }));
  const [profileData, setProfileData] = useState<EmployeeProfile | EmployerProfileRetrieve>();
  const [toggleToFetch, setToggleToFetch] = useState(false);

  useEffect(() => {
    if (userId === profileId) {
      const data = getState();
      setProfileData(data);
      return;
    }

    const fetchProfile = async (dataLoadCb: ProfileReadFn) => {
      const data = await dataLoadCb(profileId ?? userId!);
      if (data.status === 200) {
        setProfileData(data?.data);
      }
    };
    // eslint-disable-next-line default-case
    switch (profileType) {
      case 'employee':
        fetchProfile(usersEmployeeGetRead);
        return;
      case 'employer':
        fetchProfile(usersEmployerGetRead);
    }
  }, [profileType, toggleToFetch]);

  return {
    profileData,
    setToggleToFetch,
  };
};

export default useProfileFetch;
