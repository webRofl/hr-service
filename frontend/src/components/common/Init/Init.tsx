import { useInitRequests, useInitSettings } from '@/hooks';
import React, { FC, useEffect } from 'react';

const Init: FC = () => {
  const { setSettings } = useInitSettings();
  const { startFetch } = useInitRequests();

  useEffect(() => {
    startFetch();
    setSettings();
  }, []);

  return null;
};

export default Init;
