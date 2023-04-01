import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ILocalStorageState {
  isMenuOpen: boolean;
  refreshToken: string;
  username: string;
  userId: string;
  isNeedToCreateProfile: boolean;

  setIsMenuOpen(isMenuOpen: boolean): void;
  setRefreshToken(refreshToken: string): void;
  setUsername(username: string): void;
  setUserId(userId: string): void;
  setIsNeedToCreateProfile(isNeedToCreateProfile: boolean): void;
}

const useLocalStorageState = create<ILocalStorageState>()(
  persist(
    (set, get) => ({
      isMenuOpen: false,
      refreshToken: '',
      username: '',
      userId: '',
      isNeedToCreateProfile: false,
      setIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen }),
      setRefreshToken: (refreshToken: string) => set({ refreshToken }),
      setUsername: (username: string) => set({ username }),
      setUserId: (userId: string) => set({ userId }),
      setIsNeedToCreateProfile: (isNeedToCreateProfile: boolean) => set({ isNeedToCreateProfile }),
    }),
    { version: 1, name: 'localStorageState' },
  ),
);

export default useLocalStorageState;
