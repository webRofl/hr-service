import React, { FC, PropsWithChildren } from 'react';
import * as SC from './Center.style';

const Center: FC<PropsWithChildren> = ({ children }) => {
  return <SC.Container>{children}</SC.Container>;
};

export default Center;
