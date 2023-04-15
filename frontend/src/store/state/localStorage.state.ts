import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LocalStorageState {
  isMenuOpen: boolean;
  username: string;
  userId: string;
  isNeedToCreateProfile: boolean;
  responsesQuantity: number;
  responsesQuantityDifference: number;
  refreshToken: string | null;
}

interface LocalStorageMethods {
  setIsMenuOpen(isMenuOpen: boolean): void;
  setUsername(username: string): void;
  setUserId(userId: string): void;
  setIsNeedToCreateProfile(isNeedToCreateProfile: boolean): void;
  setResponsesQuantity: (responsesQuantity: number) => void;
  setRefreshToken: (token: string) => void;
}

const initialState: LocalStorageState = {
  isMenuOpen: false,
  username: '',
  userId: '',
  isNeedToCreateProfile: false,
  responsesQuantity: 0,
  responsesQuantityDifference: 0,
  refreshToken: null,
};

const useLocalStorageState = create<LocalStorageState & LocalStorageMethods>()(
  persist(
    (set, get) => ({
      ...initialState,

      setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
      setUsername: (username) => set({ username }),
      setUserId: (userId) => set({ userId }),
      setIsNeedToCreateProfile: (isNeedToCreateProfile) => set({ isNeedToCreateProfile }),
      setResponsesQuantity: (responsesQuantity) => {
        const difference = responsesQuantity - get().responsesQuantity;

        if (difference > 0) {
          set({ responsesQuantityDifference: difference });
          return;
        }

        set({ responsesQuantityDifference: 0, responsesQuantity });
      },
      setRefreshToken: (token) => set({ refreshToken: token }),
    }),
    { version: 1, name: 'localStorageState' },
  ),
);

export default useLocalStorageState;
