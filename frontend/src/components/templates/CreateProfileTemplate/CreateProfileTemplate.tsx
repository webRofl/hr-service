import { AbstractForm } from '@/components/common';
import { CreateProfileForm } from '@/components/organisms';
import React, { FC } from 'react';

const CreateProfileTemplate: FC = () => {
  return <AbstractForm renderLeft={<CreateProfileForm />} renderRight={<div>left side</div>} />;
};

export default CreateProfileTemplate;
