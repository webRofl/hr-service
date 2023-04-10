import { ProfileType } from '@/core';
import { create } from 'zustand';

interface IUseAuthStore {
  isAuth: boolean;
  userId: string | null;
  profileType: ProfileType | null;
  accessToken: string | null;

  setIsAuth: (isAuth: boolean) => void;
  setUserId: (userId: string) => void;
  setProfileType: (profileType: ProfileType) => void;
  setAccessToken: (token: string) => void;
}

const useAuthState = create<IUseAuthStore>((set, get) => ({
  isAuth: false,
  userId: null,
  profileType: null,
  accessToken: null,
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
