import { create } from 'zustand';
import { Profile } from '../api/orvalGeneration/models';

interface IProfileMethods {
  setProfile: (data: Profile) => void;
  getState: () => Profile;
}

type IProfile = Profile & IProfileMethods;

const inititalData: Profile = {
  user: '',
};

const useProfileState = create<IProfile>((set, get) => ({
  ...inititalData,
  setProfile: (data: Profile) => {
    set({ ...data });
  },
  getState: (): Profile => {
    const res: Profile = {
      user: '',
    };
    const allState = get();

    Object.keys(allState).forEach((key) => {
      if ((allState as any)[key] instanceof Function !== true) {
        (res as any)[key] = (allState as any)[key];
      }
    });

    return res;
  },
}));

export default useProfileState;
