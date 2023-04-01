import React from 'react';
import useAuth from './useAuth';

const useInitSettings = () => {
  const { setHeaders } = useAuth();

  const setSettings = () => {
    setHeaders();
  };

  return {
    setSettings,
  };
};

export default useInitSettings;
