import { useEffect, useState } from 'react';
import { GlobalENV } from '@/types';
import useAuth from './useAuth';

const useInitSettings = () => {
  const { setHeaders } = useAuth();
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval>>();

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const intervalUpdateToken = () => {
    const id = setInterval(() => {
      setHeaders();
    }, 1000 * 60 * GlobalENV.JWT_ACCESS_TTL);

    setIntervalId(id);
  };

  const setSettings = () => {
    setHeaders();
    intervalUpdateToken();
  };

  return {
    setSettings,
  };
};

export default useInitSettings;
