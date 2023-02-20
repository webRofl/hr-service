import { useLocalStorage } from '@/hooks';
import { authLoginCreate, authRefreshCreate } from '@/store/api/orvalGeneration/auth/auth';
import axios from 'axios';
import { UserDataType } from '@/types';

interface IUseAuthReturn {
  login: (data: UserDataType) => Promise<boolean>;
  setAuthHeader: () => void;
}

const useAuth = (): IUseAuthReturn => {
  const { LSGetter, LSSetter } = useLocalStorage();

  const disableAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  const setAuthHeader = async () => {
    disableAuthHeader();

    const prevToken = LSGetter('refreshToken');

    if (!prevToken) {
      return;
    }

    const refreshToken = {
      refresh_token: LSGetter('refreshToken')!,
    };
    const newAuthData = await authRefreshCreate(refreshToken);

    axios.defaults.headers.common.Authorization = newAuthData.data.access;
    LSSetter('refreshToken', newAuthData.data.refresh_token);
  };

  const login = async (data: UserDataType): Promise<boolean> => {
    try {
      disableAuthHeader();

      const newData = {
        user: {
          ...data,
        },
      };
      const loginData = (await authLoginCreate(newData)).data.user;
      axios.defaults.headers.common.Authorization = loginData.access;
      LSSetter('refreshToken', loginData.refresh);

      return true;
    } catch (e) {
      if (e instanceof Error) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      }
      return false;
    }
  };

  return {
    setAuthHeader,
    login,
  };
};

export default useAuth;
