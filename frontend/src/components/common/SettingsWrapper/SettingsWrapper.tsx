import { useAuth } from '@/hooks';
import React, { FC, PropsWithChildren, useEffect } from 'react';

const SettingsWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { setHeaders } = useAuth();

  useEffect(() => {
    setHeaders();
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default SettingsWrapper;
