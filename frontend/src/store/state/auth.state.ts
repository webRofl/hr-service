import { create } from 'zustand';
import { ProfileType } from '@/core';

interface AuthStoreState {
  isAuth: boolean;
  userId: string | null;
  profileType: ProfileType | null;
  accessToken: string | null;
}

interface AuthStoreMethods {
  setIsAuth: (isAuth: boolean) => void;
  setUserId: (userId: string) => void;
  setProfileType: (profileType: ProfileType | null) => void;
  setAccessToken: (token: string) => void;
}

const initialState: AuthStoreState = {
  isAuth: false,
  userId: null,
  profileType: null,
  accessToken: null,
};

const useAuthState = create<AuthStoreState & AuthStoreMethods>((set, get) => ({
  ...initialState,

  setIsAuth: (isAuth) => {
    set({ isAuth });
  },
  setUserId: (userId) => {
    set({ userId });
  },
  setProfileType: (type) => {
    set({ profileType: type });
  },
  setAccessToken(token) {
    set({ accessToken: token });
  },
}));

export default useAuthState;
