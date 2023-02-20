import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ILocalStorageState {
  isMenuOpen: boolean;
  refreshToken: string;
  username: string;

  setIsMenuOpen(isMenuOpen: boolean): void;
  setRefreshToken(refreshToken: string): void;
  setUsername(username: string): void;
}

const useLocalStorageState = create<ILocalStorageState>()(
  persist(
    (set, get) => ({
      isMenuOpen: false,
      refreshToken: '',
      username: '',
      setIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen }),
      setRefreshToken: (refreshToken: string) => set({ refreshToken }),
      setUsername: (username: string) => set({ username }),
    }),
    { version: 1, name: 'localStorageState' },
  ),
);

export default useLocalStorageState;
