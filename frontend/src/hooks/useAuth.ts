import axios, { AxiosError } from 'axios';
import {
  authLoginCreate,
  authRefreshCreate,
  authRegisterCreate,
} from '@/store/api/orvalGeneration/auth/auth';
import { AxiosErrorResponse } from '@/types';
import { useAuthState, useLocalStorageState } from '@/store';
import { Login, Registration } from '@/store/api/orvalGeneration/models';

interface IUseAuthReturn {
  login: (data: Login) => Promise<AxiosErrorResponse>;
  setHeaders: () => void;
  register: (data: Registration) => Promise<AxiosErrorResponse>;
  logout: () => void;
}

const useAuth = (): IUseAuthReturn => {
  const { setUsername, setUserId, refreshToken, setRefreshToken } = useLocalStorageState(
    ({ setUsername, setUserId, refreshToken, setRefreshToken }) => ({
      setUsername,
      setUserId,
      refreshToken,
      setRefreshToken,
    }),
  );
  const { setIsAuth, setAccessToken } = useAuthState(({ setIsAuth, setAccessToken }) => ({
    setIsAuth,
    setAccessToken,
    refreshToken,
    setRefreshToken,
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
      setAccessToken(newAuthData.access!);
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
  const login = async (data): Promise<AxiosErrorResponse> => {
    try {
      disableAuthHeader();

      const loginDataRequest = await authLoginCreate(data);
      const loginData = loginDataRequest.data;

      axios.defaults.headers.common.Authorization = loginData.access;
      setRefreshToken(loginData.refresh!);
      setIsAuth(true);
      setUsername(loginData.username!);
      setUserId(loginData.id!);

      return loginDataRequest;
    } catch (e) {
      if (e instanceof AxiosError) {
        const errorMessage = e.response?.data?.errors;
        // eslint-disable-next-line no-console
        console.log(errorMessage);

        return errorMessage;
      }
    }
  };

  const logout = () => {
    setUserId('');
    setIsAuth(false);
    setRefreshToken('');
  };

  const register = async (data): Promise<AxiosErrorResponse> => {
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
    logout,
  };
};

export default useAuth;
