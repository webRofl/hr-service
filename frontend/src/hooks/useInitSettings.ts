import { useEffect, useState } from 'react';
import { debounce } from 'ts-debounce';
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
    const intervalFunc = debounce(() => {
      setHeaders();
    }, 1000 * 60 * 5); // GlobalENV.JWT_ACCESS_TTL

    const id = setInterval(intervalFunc, 1000 * 60 * GlobalENV.JWT_ACCESS_TTL);

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
