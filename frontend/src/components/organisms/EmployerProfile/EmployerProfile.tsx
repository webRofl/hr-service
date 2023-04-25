import React, { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { EmployerProfileRetrieve } from '@/store/api/orvalGeneration/models';
import { Center, Reviews } from '@/components/common';
import { reviewsProfileCreate } from '@/store/api/orvalGeneration/reviews/reviews';
import { EmployerProfileHeader, ProjectPageControl } from '@/components/molecules';
import { usersEmployerGetRead, usersEmployerUpdate } from '@/store/api/orvalGeneration/users/users';
import { RichTextEditor } from '@/components/atoms';
import * as SC from './EmployerProfile.style';

interface EmployerProfileProps {
  profileId: string;
  userId: string;
}

const EmployerProfile: FC<EmployerProfileProps> = ({ profileId, userId }) => {
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [data, setData] = useState<EmployerProfileRetrieve>();
  const [isEdit, setIsEdit] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);

  const method = useForm<EmployerProfileRetrieve>({
    defaultValues: {},
  });

  useEffect(() => {
    const fetch = async () => {
      const data = (await usersEmployerGetRead(profileId)).data;
      setData(data);
    };

    fetch();
  }, [profileId]);

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
    setIsLoadingBtn(true);
    const data = (await usersEmployerUpdate(profileId, values)).data;
    setIsLoadingBtn(false);
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
          userId={userId}
        />
        <Grid xs={12}>
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
            label="Edit Profile"
          />
        )}
      </SC.Container>
    </FormProvider>
  );
};

export default EmployerProfile;
