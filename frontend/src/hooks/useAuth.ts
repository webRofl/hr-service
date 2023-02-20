import { authLoginCreate, authRefreshCreate } from '@/store/api/orvalGeneration/auth/auth';
import axios from 'axios';
import { UserDataType } from '@/types';
import { useAuthStore, useLocalStorageState } from '@/store';

interface IUseAuthReturn {
  login: (data: UserDataType) => Promise<boolean>;
  setHeaders: () => void;
}

const useAuth = (): IUseAuthReturn => {
  const { refreshToken, setRefreshToken, setUsername } = useLocalStorageState(
    ({ refreshToken, setRefreshToken, setUsername }) => ({
      refreshToken,
      setRefreshToken,
      setUsername,
    }),
  );
  const { setIsAuth } = useAuthStore(({ setIsAuth }) => ({
    setIsAuth,
  }));

  const disableAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  const setHeaders = async () => {
    disableAuthHeader();

    if (!refreshToken) {
      return;
    }
    try {
      const requestData = {
        refresh_token: refreshToken,
      };
      const newAuthData = (await authRefreshCreate(requestData)).data.user;
      // eslint-disable-next-line no-console
      console.log(newAuthData);
      axios.defaults.headers.common.Authorization = newAuthData.access;
      setRefreshToken(newAuthData.refresh);
      setIsAuth(true);
    } catch (e) {
      if (e instanceof Error) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      }
    }
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
      setRefreshToken(loginData.refresh);
      setIsAuth(true);
      setUsername(loginData.username);

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
    login,
    setHeaders,
  };
};

export default useAuth;
