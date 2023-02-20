import { create } from 'zustand';

interface IUseAuthStore {
  isAuth: boolean;

  setIsAuth: (isAuth: boolean) => void;
}

const useAuthStore = create<IUseAuthStore>((set, get) => ({
  isAuth: false,
  setIsAuth: (isAuth: boolean) => {
    set({ isAuth });
  },
}));

export default useAuthStore;
