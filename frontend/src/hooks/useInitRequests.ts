import { useAuthState, useLocalStorageState, useProfileState } from '@/store';
import { usersEmployeeRead, usersEmployerRead } from '@/store/api/orvalGeneration/users/users';
import { ProfileReadFn } from '@/types';
import React from 'react';

const useInitRequests = () => {
  const { userId, setIsNeedToCreateProfile } = useLocalStorageState(
    ({ userId, setIsNeedToCreateProfile }) => ({ userId, setIsNeedToCreateProfile }),
  );
  const { setProfile } = useProfileState(({ setProfile }) => ({ setProfile }));
  const { setProfileType } = useAuthState(({ setProfileType }) => ({ setProfileType }));

  const startFetch = () => {
    const fetchProfile = async (userId: string) => {
      const dataValidate = async (readFunc: ProfileReadFn) => {
        const data = await readFunc(userId);
        if (data && Object.keys(data?.data).length) {
          setIsNeedToCreateProfile(false);
          setProfile(data?.data);
        }
      };

      try {
        await dataValidate(usersEmployeeRead);
        setProfileType('employee');
      } catch {
        try {
          await dataValidate(usersEmployerRead);
          setProfileType('employer');
        } catch {
          setIsNeedToCreateProfile(true);
        }
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
