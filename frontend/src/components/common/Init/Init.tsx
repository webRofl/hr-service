import React, { FC, useEffect } from 'react';
import { useInitRequests, useInitSettings } from '@/hooks';

const Init: FC = () => {
  const { setSettings } = useInitSettings();
  useInitRequests();

  useEffect(() => {
    setSettings();
  }, []);

  return null;
};

export default Init;
