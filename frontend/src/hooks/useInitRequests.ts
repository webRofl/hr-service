import { useLocalStorageState, useProfileState } from '@/store';
import { usersRead } from '@/store/api/orvalGeneration/users/users';
import React from 'react';

const useInitRequests = () => {
  const { userId, setIsNeedToCreateProfile } = useLocalStorageState(
    ({ userId, setIsNeedToCreateProfile }) => ({ userId, setIsNeedToCreateProfile }),
  );
  const { setProfile } = useProfileState(({ setProfile }) => ({ setProfile }));

  const startFetch = () => {
    const fetchProfile = async (userId: string) => {
      try {
        const data = await usersRead(userId);
        if (data && Object.keys(data?.data).length) {
          setIsNeedToCreateProfile(false);
          setProfile(data?.data);
        }
      } catch {
        setIsNeedToCreateProfile(true);
      }
    };

    if (userId) {
      fetchProfile(userId);
    }
  };

  return {
    startFetch,
  };
};

export default useInitRequests;
