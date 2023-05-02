import { useAuthState, useLocalStorageState, useProfileState } from '@/store';
import { ProfileReadFn } from '@/types';
import {
  usersEmployeeGetRead,
  usersEmployerGetRead,
} from '@/store/api/orvalGeneration/users/users';

const useSetProfile = () => {
  const { userId, setIsNeedToCreateProfile } = useLocalStorageState(
    ({ userId, setIsNeedToCreateProfile }) => ({ userId, setIsNeedToCreateProfile }),
  );
  const { setProfile } = useProfileState(({ setProfile }) => ({ setProfile }));
  const { setProfileType } = useAuthState(({ setProfileType }) => ({ setProfileType }));
  const { setResponsesQuantity } = useLocalStorageState(({ setResponsesQuantity }) => ({
    setResponsesQuantity,
  }));

  const fetchAndSetProfile = async (userIdExternal?: string) => {
    const userIdInternal = userId || userIdExternal;

    if (!userIdInternal) {
      throw new Error('User id is not defined!');
    }

    const dataValidate = async (readFunc: ProfileReadFn) => {
      const data = await readFunc(userIdInternal);
      if (data && Object.keys(data?.data).length) {
        setIsNeedToCreateProfile(false);
        setProfile(data?.data);
        // @ts-expect-error invalid types
        const responses = data?.data?.responses;

        if (responses) {
          setResponsesQuantity(responses.length);
        }
      }
    };

    try {
      await dataValidate(usersEmployeeGetRead);
      setProfileType('employee');
    } catch {
      try {
        await dataValidate(usersEmployerGetRead);
        setProfileType('employer');
      } catch {
        // setIsNeedToCreateProfile(true);
      }
    }
  };

  return {
    fetchAndSetProfile,
  };
};

export default useSetProfile;
