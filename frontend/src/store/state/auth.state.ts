import { create } from 'zustand';

interface IUseAuthStore {
  isAuth: boolean;

  setIsAuth: (isAuth: boolean) => void;
}

const useAuthState = create<IUseAuthStore>((set, get) => ({
  isAuth: false,
  setIsAuth: (isAuth: boolean) => {
    set({ isAuth });
  },
}));

export default useAuthState;
