import React, { FC } from 'react';
import { useInitRequests, useInitSettings } from '@/hooks';

const Init: FC = () => {
  useInitSettings();
  useInitRequests();

  return null;
};

export default Init;
