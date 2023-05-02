// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';
import { AuthForm } from '@/components/molecules';
import { useLocalStorageState } from '@/store';
import { usersEmployeeCreate, usersEmployerCreate } from '@/store/api/orvalGeneration/users/users';
import { ProfileType, ROUTES } from '@/core';
import { useSetProfile } from '@/hooks';
import { DefaultValues, ExtractProfiles } from './CreateProfileForm.types';
import * as SC from './CreateProfileForm.style';

const CreateProfileForm = () => {
  const navigate = useNavigate();
  const { setIsNeedToCreateProfile } = useLocalStorageState(({ setIsNeedToCreateProfile }) => ({
    setIsNeedToCreateProfile,
  }));
  const { fetchAndSetProfile } = useSetProfile();
  const [profileType, setProfileType] = useState<ProfileType>('employee');

  const setDefaultValues = (profileType: ProfileType): DefaultValues<typeof profileType> => {
    const commonValues = {
      image: new Blob(),
      city: '',
      bio: '',
    };

    if (profileType === 'employer') {
      return {
        ...commonValues,
        company_name: '',
        description: '',
        website: '',
      };
    }

    return {
      ...commonValues,
      name: '',
      second_name: '',
      github: '',
      linkedin: '',
      youtube: '',
      salary: null,
    };
  };

  const method = useForm<ExtractProfiles>({
    defaultValues: setDefaultValues(profileType),
  });

  useEffect(() => {
    method.reset(setDefaultValues(profileType));
  }, [profileType]);

  const successCb = (id?: string) => {
    fetchAndSetProfile(id);
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
      profileType={profileType}
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
