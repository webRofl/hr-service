import { AuthForm } from '@/components/molecules';
import { useLocalStorageState } from '@/store';
import { usersCreate } from '@/store/api/orvalGeneration/users/users';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ProfileFields } from './CreateProfileForm.types';

const CreateProfileForm = () => {
  const navigate = useNavigate();
  const { setIsNeedToCreateProfile } = useLocalStorageState(({ setIsNeedToCreateProfile }) => ({
    setIsNeedToCreateProfile,
  }));

  const method = useForm<ProfileFields>({
    defaultValues: {
      name: '',
      second_name: '',
      city: '',
      bio: '',
      github: '',
      linkedin: '',
      youtube: '',
      website: '',
    },
  });

  const successCb = () => {
    setIsNeedToCreateProfile(false);
    navigate('/');
  };

  return (
    <AuthForm
      methods={method}
      btnText="Go"
      onSuccessSubmitHandler={successCb}
      dataLoadCb={usersCreate}
    />
  );
};

export default CreateProfileForm;
