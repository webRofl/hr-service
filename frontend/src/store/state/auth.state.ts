import { create } from 'zustand';

interface IUseAuthStore {
  isAuth: boolean;
  userId: number | null;

  setIsAuth: (isAuth: boolean) => void;
}

const useAuthState = create<IUseAuthStore>((set, get) => ({
  isAuth: false,
  userId: null,
  setIsAuth: (isAuth: boolean) => {
    set({ isAuth });
  },
  setUserId: (userId: number) => {
    set({ userId });
  },
}));

export default useAuthState;
