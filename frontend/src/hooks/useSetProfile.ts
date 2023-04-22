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

  const fetchAndSetProfile = () => {
    const fetchProfile = async (userId: string) => {
      const dataValidate = async (readFunc: ProfileReadFn) => {
        const data = await readFunc(userId);
        if (data && Object.keys(data?.data).length) {
          setIsNeedToCreateProfile(false);
          setProfile(data?.data);
          if (data?.data?.responses) {
            setResponsesQuantity(data?.data?.responses.length);
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

    if (userId) {
      fetchProfile(userId);
    }
  };

  return {
    fetchAndSetProfile,
  };
};

export default useSetProfile;
