import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';
import { AuthForm } from '@/components/molecules';
import { useLocalStorageState } from '@/store';
import { usersEmployeeCreate, usersEmployerCreate } from '@/store/api/orvalGeneration/users/users';
import { ProfileType, ROUTES } from '@/core';
import { ProfileFields } from './CreateProfileForm.types';
import * as SC from './CreateProfileForm.style';

const CreateProfileForm = () => {
  const navigate = useNavigate();
  const { setIsNeedToCreateProfile } = useLocalStorageState(({ setIsNeedToCreateProfile }) => ({
    setIsNeedToCreateProfile,
  }));
  const [profileType, setProfileType] = useState<ProfileType>('employee');

  const method = useForm<ProfileFields & { type: ProfileType }>({
    defaultValues: {
      name: '',
      second_name: '',
      city: '',
      bio: '',
    },
  });

  const successCb = () => {
    setIsNeedToCreateProfile(false);
    navigate(ROUTES.MAIN);
  };

  const handleChangeProfileType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileType(event.target.checked ? 'employer' : 'employee');
  };

  return (
    <AuthForm
      methods={method}
      btnText="Go"
      onSuccessSubmitHandler={successCb}
      dataLoadCb={profileType === 'employee' ? usersEmployeeCreate : usersEmployerCreate}>
      <SC.SwitchBlock>
        <span>Employee</span>
        <Switch
          onChange={handleChangeProfileType}
          checked={profileType === 'employer'}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <span>Employer</span>
      </SC.SwitchBlock>
    </AuthForm>
  );
};

export default CreateProfileForm;
