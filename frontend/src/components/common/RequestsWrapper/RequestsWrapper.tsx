import { useLocalStorageState, useProfileState } from '@/store';
import { usersRead } from '@/store/api/orvalGeneration/users/users';
import React, { FC, PropsWithChildren, useEffect } from 'react';

const RequestsWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const { setProfile } = useProfileState(({ setProfile }) => ({ setProfile }));

  useEffect(() => {
    const fetchProfile = async (userId: string) => {
      const data = await usersRead(userId);
      if (data && Object.keys(data?.data).length) {
        setProfile(data?.data);
      }
    };

    if (userId) {
      fetchProfile(userId);
    }
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default RequestsWrapper;
