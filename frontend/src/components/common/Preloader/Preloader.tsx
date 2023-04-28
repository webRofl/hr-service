import React from 'react';
import { ReactComponent as Suspense } from '@/assets/icons/suspense.svg';
import * as SC from './Preloader.style';

const Preloader = () => {
  return (
    <SC.Container>
      <Suspense />
    </SC.Container>
  );
};

export default Preloader;
