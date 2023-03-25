import { ProfileLogo, ProfileMainData, ProfileSkills } from '@/components/molecules';
import { useLocalStorageState, useProfileState } from '@/store';
import { usersUpdate, usersRead } from '@/store/api/orvalGeneration/users/users';
import { Grid } from '@mui/material';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as SC from './Profile.style';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { profileId } = useParams();
  const { getState, setProfile } = useProfileState(({ getState, setProfile }) => ({
    getState,
    setProfile,
  }));
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editedData, setEditedData] = useState(getState());

  useEffect(() => {
    if (!userId && !profileId && location.pathname === '/profile') {
      navigate('/');
      return;
    }

    if (userId === profileId) {
      navigate('/profile');
      return;
    }

    if (location.pathname.match(/profile$/) && userId) {
      setIsMyProfile(true);
      usersRead(userId).then((data) => {
        setProfile(data?.data);
        setEditedData({ ...data?.data });
      });
      return;
    }

    if (profileId) {
      usersRead(profileId).then((data) => {
        setEditedData(data?.data);
      });
    }
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = editedData ? `${editedData.name} ${editedData.second_name}` : prevTitle;

    return () => {
      document.title = prevTitle;
    };
  }, [editedData]);

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

  if (!getState()) {
    return <SC.ErrorContainer>There is no such profile</SC.ErrorContainer>;
  }

  return (
    <SC.Container container spacing={2}>
      <Grid item lg={4} md={4}>
        <SC.GridItem>
          <ProfileLogo
            image={editedData.image || ''}
            position="Full-Stack dev"
            area="Moscow"
            name={editedData.name || ''}
            secondName={editedData.second_name || ''}
            isEdit={isEdit}
            isMyProfile={isMyProfile}
            editClickHandler={editClickHandler}
            submitHandler={submitHandler}
          />
        </SC.GridItem>
      </Grid>
      <Grid item lg={8} md={8}>
        <SC.GridItem>
          {editedData && (
            <ProfileMainData data={editedData} isEdit={isEdit} setEditedData={setEditedData} />
          )}
        </SC.GridItem>
      </Grid>
      <Grid item lg={9} md={7}>
        <SC.GridItem>
          <ProfileSkills skills={editedData.skills} />
        </SC.GridItem>
      </Grid>
    </SC.Container>
  );
};

export default Profile;
