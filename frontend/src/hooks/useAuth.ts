import {
  authLoginCreate,
  authRefreshCreate,
  authRegisterCreate,
} from '@/store/api/orvalGeneration/auth/auth';
import axios, { AxiosError } from 'axios';
import { AxiosErrorResponse, UserDataType } from '@/types';
import { useAuthState, useLocalStorageState } from '@/store';

interface IUseAuthReturn {
  login: (data: UserDataType) => Promise<AxiosErrorResponse>;
  setHeaders: () => void;
  register: (data: UserDataType & { username: string }) => Promise<AxiosErrorResponse>;
}

const useAuth = (): IUseAuthReturn => {
  const { refreshToken, setRefreshToken, setUsername, setUserId } = useLocalStorageState(
    ({ refreshToken, setRefreshToken, setUsername, setUserId }) => ({
      refreshToken,
      setRefreshToken,
      setUsername,
      setUserId,
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
      const newAuthData = (await authRefreshCreate(requestData)).data;
      axios.defaults.headers.common.Authorization = `Token ${newAuthData.access}`;
      setRefreshToken(newAuthData.refresh!);
      setIsAuth(true);
    } catch (e) {
      if (e instanceof Error) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      }
    }
  };

  // eslint-disable-next-line consistent-return
  const login = async (data: UserDataType): Promise<AxiosErrorResponse> => {
    try {
      disableAuthHeader();

      const loginData = (await authLoginCreate(data)).data;
      axios.defaults.headers.common.Authorization = loginData.access;
      setRefreshToken(loginData.refresh!);
      setIsAuth(true);
      setUsername(loginData.username!);
      setUserId(loginData.id!);
    } catch (e) {
      if (e instanceof AxiosError) {
        const errorMessage = e.response?.data?.errors;
        // eslint-disable-next-line no-console
        console.log(errorMessage);

        return errorMessage;
      }
    }
  };

  const register = async (
    data: UserDataType & { username: string },
  ): Promise<AxiosErrorResponse> => {
    try {
      await authRegisterCreate(data);
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
