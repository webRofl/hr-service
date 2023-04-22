import { useEffect } from 'react';
import useSetProfile from './useSetProfile';
import useWebSocket from './useWebSocket';

const useInitRequests = () => {
  useWebSocket();
  const { fetchAndSetProfile } = useSetProfile();

  useEffect(() => {
    fetchAndSetProfile();
  }, []);
};

export default useInitRequests;
