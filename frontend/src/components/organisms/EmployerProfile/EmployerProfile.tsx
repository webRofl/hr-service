import React, { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { EmployerProfileRetrieve } from '@/store/api/orvalGeneration/models';
import { Center, Reviews } from '@/components/common';
import { reviewsProfileCreate } from '@/store/api/orvalGeneration/reviews/reviews';
import { EmployerProfileHeader } from '@/components/molecules';
import { usersEmployerGetRead } from '@/store/api/orvalGeneration/users/users';
import * as SC from './EmployerProfile.style';

interface EmployerProfileProps {
  profileData: EmployerProfileRetrieve;
  profileId: string;
  userId: string;
}

const EmployerProfile: FC<EmployerProfileProps> = ({ profileData, profileId, userId }) => {
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [data, setData] = useState<EmployerProfileRetrieve>(profileData);

  useEffect(() => {
    setData(profileData);
  }, [profileData]);

  useEffect(() => {
    if (profileId === userId) {
      setIsMyProfile(true);
    }
  }, [profileId, userId]);

  const method = useForm<EmployerProfileRetrieve>({
    defaultValues: {},
  });

  const reviewSuccessCb = () => {
    usersEmployerGetRead(profileId).then((data) => setData(data.data));
  };

  if (!data) {
    return <Center>No such profile</Center>;
  }

  return (
    <FormProvider {...method}>
      <SC.Container>
        <EmployerProfileHeader
          title={data.company_name}
          city={data.city}
          image={data.image}
          projectsCount={data.projects_count}
          totalVotes={data.total_votes}
          votesAverage={data.votes_average}
          website={data.website}
        />
        <Grid lg={12} md={12}>
          {data.description}
        </Grid>
        <Reviews
          placeName="profile"
          placeId={profileId}
          reviews={data.reviews || []}
          dataLoadCallback={reviewsProfileCreate}
          successCallback={reviewSuccessCb}
        />
      </SC.Container>
    </FormProvider>
  );
};

export default EmployerProfile;
