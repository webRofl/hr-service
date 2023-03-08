import { ProfileLogo, ProfileMainData, ProfileSkills } from '@/components/molecules';
import { useLocalStorageState, useProfileState } from '@/store';
import { usersUpdate, usersRead } from '@/store/api/orvalGeneration/users/users';
import { Button, Grid } from '@mui/material';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as SC from './Profile.style';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { profileId } = useParams();
  const { getState } = useProfileState(({ getState }) => ({ getState }));
  const [data, setData] = useState({});
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editedData, setEditedData] = useState(data);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = data ? `${data.name} ${data.second_name}` : prevTitle;

    if (userId === profileId) {
      navigate('/profile');
      return;
    }

    if (location.pathname.match(/profile$/) && userId) {
      setIsMyProfile(true);
      setData(getState());
      setEditedData({ ...data });
      return;
    }

    usersRead(profileId).then((data) => setData(data?.data));
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

  if (!data) {
    return <SC.ErrorContainer>There is no such profile</SC.ErrorContainer>;
  }

  return (
    <SC.Container container spacing={2}>
      <Grid item lg={4} md={4}>
        <SC.GridItem>
          <ProfileLogo
            image={data.image}
            position="Full-Stack dev"
            area="Moscow"
            name={data.name}
            secondName={data.second_name}
            isEdit={isEdit}
            editClickHandler={editClickHandler}
          />
        </SC.GridItem>
      </Grid>
      <Grid item lg={8} md={8}>
        <SC.GridItem>
          {data && <ProfileMainData data={data} isEdit={isEdit} setEditedData={setEditedData} />}
        </SC.GridItem>
      </Grid>
      <Grid item lg={9} md={7}>
        <SC.GridItem>
          <ProfileSkills skills={data.skills} />
        </SC.GridItem>
      </Grid>
      <Button type="button" onClick={submitHandler}>
        SUBMIT
      </Button>
    </SC.Container>
  );
};

export default Profile;
