import { ProfileType } from '@/core';
import { create } from 'zustand';

interface IUseAuthStore {
  isAuth: boolean;
  userId: string | null;
  profileType: ProfileType | null;

  setIsAuth: (isAuth: boolean) => void;
  setUserId: (userId: string) => void;
  setProfileType: (profileType: ProfileType) => void;
}

const useAuthState = create<IUseAuthStore>((set, get) => ({
  isAuth: false,
  userId: null,
  profileType: null,
  setIsAuth: (isAuth) => {
    set({ isAuth });
  },
  setUserId: (userId) => {
    set({ userId });
  },
  setProfileType: (type) => {
    set({ profileType: type });
  },
}));

export default useAuthState;
