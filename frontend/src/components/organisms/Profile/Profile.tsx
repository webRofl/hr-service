import { ProfileLogo, ProfileMainData, ProfileSkills } from '@/components/molecules';
import { useLocalStorageState } from '@/store';
import { Profile as IProfile } from '@/store/api/orvalGeneration/models';
import { usersUpdate, useUsersRead } from '@/store/api/orvalGeneration/users/users';
import { Button, Grid } from '@mui/material';
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
  const [editedData, setEditedData] = useState(data?.data);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = data ? `${data.data.name} ${data.data.second_name}` : prevTitle;

    if (userId && data?.data?.user === userId) {
      navigate('/profile');
      setIsMyProfile(true);
      setEditedData({ ...data?.data });
    }
  }, [data]);

  const editClickHandler: MouseEventHandler<HTMLElement> = () => {
    return setIsEdit((prev) => !prev);
  };

  const submitHandler: MouseEventHandler<HTMLButtonElement> = async () => {
    if (editedData) {
      delete editedData.image;
      delete editedData.email;
      delete editedData.username;
      delete editedData.skills;
      await usersUpdate(userId, editedData);
      setIsEdit(false);
    }
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
        <SC.GridItem>
          {data && (
            <ProfileMainData data={data?.data} isEdit={isEdit} setEditedData={setEditedData} />
          )}
        </SC.GridItem>
      </Grid>
      <Grid item lg={9} md={7}>
        <SC.GridItem>
          <ProfileSkills skills={data?.data?.skills} />
        </SC.GridItem>
      </Grid>
      <Button type="button" onClick={submitHandler}>
        SUBMIT
      </Button>
    </SC.Container>
  );
};

export default Profile;
