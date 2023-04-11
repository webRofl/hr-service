import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, PopupCatalog } from '@/components/common';
import { useAuthState, useProfileState } from '@/store';
import { ROUTES } from '@/core';
import * as SC from './Responses.style';

const Responses = () => {
  const navigate = useNavigate();
  const { profileType } = useAuthState(({ profileType }) => ({ profileType }));
  const { responses } = useProfileState(({ responses }) => ({ responses }));

  if (profileType !== 'employer') {
    navigate(ROUTES.PROJECTS);
  }

  if (!responses) {
    return <Center>No such responses.</Center>;
  }

  return (
    <SC.Container>
      <PopupCatalog cardList={responses} />
    </SC.Container>
  );
};

export default Responses;
