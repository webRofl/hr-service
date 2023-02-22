import {
  authLoginCreate,
  authRefreshCreate,
  authRegisterCreate,
} from '@/store/api/orvalGeneration/auth/auth';
import axios, { AxiosError } from 'axios';
import { UserDataType } from '@/types';
import { useAuthState, useLocalStorageState } from '@/store';

interface IUseAuthReturn {
  login: (data: UserDataType) => Promise<string | undefined>;
  setHeaders: () => void;
  register: (
    data: UserDataType & { username: string },
  ) => Promise<Record<string, string[]> | undefined>;
}

const useAuth = (): IUseAuthReturn => {
  const { refreshToken, setRefreshToken, setUsername } = useLocalStorageState(
    ({ refreshToken, setRefreshToken, setUsername }) => ({
      refreshToken,
      setRefreshToken,
      setUsername,
    }),
  );
  const { setIsAuth } = useAuthState(({ setIsAuth }) => ({
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

  // eslint-disable-next-line consistent-return
  const login = async (data: UserDataType): Promise<string | undefined> => {
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
    } catch (e) {
      if (e instanceof AxiosError) {
        const errorMessage = e.response?.data?.errors?.error[0];
        // eslint-disable-next-line no-console
        console.log(errorMessage);

        return errorMessage;
      }
    }
  };

  const register = async (
    data: UserDataType & { username: string },
  ): Promise<Record<string, string[]> | undefined> => {
    try {
      const newData = {
        user: {
          ...data,
        },
      };

      await authRegisterCreate(newData);
      return;
    } catch (e) {
      if (e instanceof AxiosError) {
        const errorMessages = e.response?.data?.errors;
        // eslint-disable-next-line no-console
        console.log(errorMessages);

        // eslint-disable-next-line consistent-return
        return errorMessages;
      }
    }
  };

  return {
    login,
    setHeaders,
    register,
  };
};

export default useAuth;
