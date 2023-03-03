import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ILocalStorageState {
  isMenuOpen: boolean;
  refreshToken: string;
  username: string;
  userId: string;

  setIsMenuOpen(isMenuOpen: boolean): void;
  setRefreshToken(refreshToken: string): void;
  setUsername(username: string): void;
  setUserId(userId: string): void;
}

const useLocalStorageState = create<ILocalStorageState>()(
  persist(
    (set, get) => ({
      isMenuOpen: false,
      refreshToken: '',
      username: '',
      userId: '',
      setIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen }),
      setRefreshToken: (refreshToken: string) => set({ refreshToken }),
      setUsername: (username: string) => set({ username }),
      setUserId: (userId: string) => set({ userId }),
    }),
    { version: 1, name: 'localStorageState' },
  ),
);

export default useLocalStorageState;
