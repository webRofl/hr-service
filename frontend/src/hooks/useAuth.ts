import axios, { AxiosError, AxiosResponse } from 'axios';
import { debounce } from 'ts-debounce';
import {
  authLoginCreate,
  authRefreshCreate,
  authRegisterCreate,
} from '@/store/api/orvalGeneration/auth/auth';
import { AxiosErrorResponse } from '@/types';
import { useAuthState, useLocalStorageState } from '@/store';
import { Login, Registration } from '@/store/api/orvalGeneration/models';

type LoginType = (data: Login) => Promise<AxiosErrorResponse>;
type RegisterType = (
  data: Registration,
) => AxiosResponse<Registration> | Promise<AxiosErrorResponse>;
type LogOut = () => void;

const useAuth = () => {
  const { setUsername, setUserId, refreshToken, setRefreshToken } = useLocalStorageState(
    ({ setUsername, setUserId, refreshToken, setRefreshToken }) => ({
      setUsername,
      setUserId,
      refreshToken,
      setRefreshToken,
    }),
  );
  const { setIsAuth, setAccessToken, setProfileType } = useAuthState(
    ({ setIsAuth, setAccessToken, setProfileType }) => ({
      setIsAuth,
      setAccessToken,
      setProfileType,
    }),
  );

  const disableAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  const setHeaders = debounce(async () => {
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
  }, 100);

  // eslint-disable-next-line consistent-return
  const login: LoginType = async (data) => {
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

  const logout: LogOut = () => {
    setUserId('');
    setIsAuth(false);
    setRefreshToken('');
    setProfileType(null);
  };

  // eslint-disable-next-line consistent-return
  const register: RegisterType = async (data) => {
    try {
      const regData = await authRegisterCreate(data);
      return regData;
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
