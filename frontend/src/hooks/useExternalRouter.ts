import { useLocalStorageState } from '@/store';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type AviableNames = 'isNeedToCreateProfile';

const useExternalRouter = (name: AviableNames) => {
  const navigate = useNavigate();
  const { isNeedToCreateProfile } = useLocalStorageState(({ isNeedToCreateProfile }) => ({
    isNeedToCreateProfile,
  }));

  const conditionalAction = (result: boolean, path: string) => {
    if (result) {
      return () => navigate(path);
    }

    return () => null;
  };

  const conditions = {
    isNeedToCreateProfile: {
      result: isNeedToCreateProfile,
      action: conditionalAction(isNeedToCreateProfile, '/profile/create'),
    },
  };

  return {
    action: conditions[name].action,
  };
};

export default useExternalRouter;
