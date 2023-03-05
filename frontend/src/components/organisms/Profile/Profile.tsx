import { ProfileLogo, ProfileMainData, ProfileSkills } from '@/components/molecules';
import { useLocalStorageState } from '@/store';
import { useUsersRead } from '@/store/api/orvalGeneration/users/users';
import { Grid } from '@mui/material';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as SC from './Profile.style';

const Profile = () => {
  const navigate = useNavigate();
  const { profileId } = useParams();
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const { data, isFetching } = useUsersRead(profileId || userId);
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = data ? `${data.data.name} ${data.data.second_name}` : prevTitle;

    if (userId && data?.data?.user === userId) {
      navigate('/profile');
      setIsMyProfile(true);
    }
  }, [data]);

  const editClickHandler: MouseEventHandler<HTMLElement> = () => {
    return setIsEdit((prev) => !prev);
  };

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
            isEdit={isEdit}
            editClickHandler={editClickHandler}
          />
        </SC.GridItem>
      </Grid>
      <Grid item lg={8} md={8}>
        <SC.GridItem>{data && <ProfileMainData data={data.data} />}</SC.GridItem>
      </Grid>
      <Grid item lg={9} md={7}>
        <SC.GridItem>
          <ProfileSkills skills={data?.data?.skills} />
        </SC.GridItem>
      </Grid>
    </SC.Container>
  );
};

export default Profile;
