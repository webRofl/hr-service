import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ILocalStorageState {
  isMenuOpen: boolean;
  refreshToken: string;
  username: string;
  userId: string;
  isNeedToCreateProfile: boolean;
  responsesQuantity: number;
  responsesQuantityDifference: number;

  setIsMenuOpen(isMenuOpen: boolean): void;
  setRefreshToken(refreshToken: string): void;
  setUsername(username: string): void;
  setUserId(userId: string): void;
  setIsNeedToCreateProfile(isNeedToCreateProfile: boolean): void;
  setResponsesQuantity: (responsesQuantity: number) => void;
  resetToZeroResponsesDifference: () => void;
}

const useLocalStorageState = create<ILocalStorageState>()(
  persist(
    (set, get) => ({
      isMenuOpen: false,
      refreshToken: '',
      username: '',
      userId: '',
      isNeedToCreateProfile: false,
      responsesQuantity: 0,
      responsesQuantityDifference: 0,
      setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      setUsername: (username) => set({ username }),
      setUserId: (userId) => set({ userId }),
      setIsNeedToCreateProfile: (isNeedToCreateProfile) => set({ isNeedToCreateProfile }),
      setResponsesQuantity: (responsesQuantity) => {
        const difference = responsesQuantity - get().responsesQuantity;
        if (difference !== 0) {
          set({ responsesQuantityDifference: difference });
        }
        set({ responsesQuantity });
      },
      resetToZeroResponsesDifference: () => set({ responsesQuantityDifference: 0 }),
    }),
    { version: 1, name: 'localStorageState' },
  ),
);

export default useLocalStorageState;
