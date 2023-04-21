import React, { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { EmployerProfileRetrieve } from '@/store/api/orvalGeneration/models';
import { Center, DivInput, Reviews } from '@/components/common';
import { reviewsProfileCreate } from '@/store/api/orvalGeneration/reviews/reviews';
import { EmployerProfileHeader, ProjectPageControl } from '@/components/molecules';
import { usersEmployerGetRead, usersEmployerUpdate } from '@/store/api/orvalGeneration/users/users';
import { RichTextEditor } from '@/components/atoms';
import * as SC from './EmployerProfile.style';

interface EmployerProfileProps {
  profileData: EmployerProfileRetrieve;
  profileId: string;
  userId: string;
}

const EmployerProfile: FC<EmployerProfileProps> = ({ profileData, profileId, userId }) => {
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [data, setData] = useState<EmployerProfileRetrieve>(profileData);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);

  const method = useForm<EmployerProfileRetrieve>({
    defaultValues: {},
  });

  useEffect(() => {
    setData(profileData);
    method.reset(profileData);
  }, [profileData]);

  useEffect(() => {
    if (profileId === userId) {
      setIsMyProfile(true);
    }
  }, [profileId, userId]);

  const updateProfileData = () => {
    usersEmployerGetRead(profileId).then((data) => setData(data.data));
  };

  if (!data) {
    return <Center>No such profile</Center>;
  }

  const handleClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const submitHandler = async (values) => {
    const data = (await usersEmployerUpdate(profileId, values)).data;
    setData(data);
    setIsEdit(false);
    updateProfileData();
  };

  return (
    <FormProvider {...method}>
      <SC.Container component="form" container onSubmit={method.handleSubmit(submitHandler)}>
        <EmployerProfileHeader
          title={data.company_name}
          city={data.city}
          image={data.image}
          projectsCount={data.projects_count}
          totalVotes={data.total_votes}
          votesAverage={data.votes_average}
          website={data.website}
          isEdit={isEdit}
        />
        <Grid lg={12} md={12}>
          {/* <DivInput name="description" isEdit={isEdit} value={data.description} /> */}
          <RichTextEditor isEdit={isEdit} name="description" defaultValue={data.description} />
        </Grid>
        <Reviews
          placeName="profile"
          placeId={profileId}
          reviews={data.reviews || []}
          dataLoadCallback={reviewsProfileCreate}
          successCallback={updateProfileData}
        />
        {isMyProfile && (
          <ProjectPageControl
            isEdit={isEdit}
            handleClickEdit={handleClickEdit}
            isLoadingSubmitBtn={isLoadingBtn}
          />
        )}
      </SC.Container>
    </FormProvider>
  );
};

export default EmployerProfile;
