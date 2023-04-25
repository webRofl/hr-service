import { create } from 'zustand';
import { ProfileState, ProfileStateMethods } from '@/types';

const initialState: ProfileState = {
  description: '',
  user: '',
};

const useProfileState = create<ProfileState & ProfileStateMethods>((set, get) => ({
  ...initialState,
  setProfile: (profile: ProfileState) => {
    set({ ...profile });
  },
  getState: () => {
    const res = { ...initialState };
    const state = get();

    Object.typedKeys(state).forEach((key) => {
      if (typeof state[key] === 'function') return;
      (res as any)[key] = state[key];
    });

    return res;
  },
}));

export default useProfileState;
