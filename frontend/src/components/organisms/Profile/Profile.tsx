import { ProfileLogo, ProfileMainData } from '@/components/molecules';
import { useLocalStorageState } from '@/store';
import { useUsersRead } from '@/store/api/orvalGeneration/users/users';
import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as SC from './Profile.style';

const Profile = () => {
  const { profileId } = useParams();
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const { data, isFetching } = useUsersRead(profileId || userId);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = data ? `${data.data.name} ${data.data.second_name}` : prevTitle;
  }, [data]);

  if (!data && !isFetching) {
    return <SC.ErrorContainer>There is no such profile</SC.ErrorContainer>;
  }

  return (
    <SC.Container container spacing={2}>
      <Grid item lg={4} md={4}>
        <SC.GridItem>
          <ProfileLogo
            image={data?.data?.image}
            position="Full-Stack dev"
            area="Moscow"
            name={data?.data?.name}
            secondName={data?.data?.second_name}
          />
        </SC.GridItem>
      </Grid>
      <Grid item lg={8} md={8}>
        <SC.GridItem>{data && <ProfileMainData data={data.data} />}</SC.GridItem>
      </Grid>
      <Grid item lg={9} md={7}>
        <SC.GridItem>skills picker</SC.GridItem>
      </Grid>
    </SC.Container>
  );
};

export default Profile;
