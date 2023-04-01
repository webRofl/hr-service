import { useLocalStorageState, useProfileState } from '@/store';
import { usersRead } from '@/store/api/orvalGeneration/users/users';
import React from 'react';

const useInitRequests = () => {
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const { setProfile } = useProfileState(({ setProfile }) => ({ setProfile }));

  const startFetch = () => {
    const fetchProfile = async (userId: string) => {
      const data = await usersRead(userId);
      if (data && Object.keys(data?.data).length) {
        setProfile(data?.data);
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
