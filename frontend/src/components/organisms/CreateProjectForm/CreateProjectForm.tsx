import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AbstractForm } from '@/components/common';
import { AuthForm } from '@/components/molecules';
import { useLocalStorageState } from '@/store';
import { Project } from '@/store/api/orvalGeneration/models';
import { projectsCreate } from '@/store/api/orvalGeneration/projects/projects';

const CreateProfileForm = () => {
  const navigate = useNavigate();
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));

  const method = useForm<
    Pick<
      Project,
      | 'title'
      | 'description'
      | 'fully_description'
      | 'salary'
      | 'experience'
      | 'employment'
      | 'demo_link'
      | 'source_link'
      | 'image'
    >
  >({
    defaultValues: {
      title: '',
      description: '',
      fully_description: '',
      salary: null,
      experience: 0,
      employment: 'FT',
      demo_link: '',
      image: new Blob(),
    },
  });

  const successCb = () => {
    navigate(`/profile/${userId}/projects`);
  };

  return (
    <AbstractForm
      heightException
      isBigForm
      renderLeft={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <AuthForm
          methods={method}
          btnText="Go"
          onSuccessSubmitHandler={successCb}
          dataLoadCb={projectsCreate}
        />
      }
      renderRight={<div>left side</div>}
    />
  );
};

export default CreateProfileForm;
