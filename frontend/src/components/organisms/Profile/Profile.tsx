import { Center, Reviews } from '@/components/common';
import { ProfileLogo, ProfileMainData, ProfileSkills } from '@/components/molecules';
import { useLocalStorageState, useProfileState } from '@/store';
import { reviewsProfileCreate } from '@/store/api/orvalGeneration/reviews/reviews';
import { usersUpdate, usersRead } from '@/store/api/orvalGeneration/users/users';
import { exclude } from '@/utils';
import { Grid } from '@mui/material';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Profile as IProfile } from '../../../store/api/orvalGeneration/models';
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
  const [profileData, setProfileData] = useState<IProfile | null>(null);

  const method = useForm<IProfile>({
    defaultValues: {},
  });

  const setProfileEverywhere = (profile: IProfile) => {
    setProfileData(profile);
    method.reset(profile);
  };

  useEffect(() => {
    if (!userId && !profileId && location.pathname === '/profile') {
      navigate('/');
      return;
    }

    if (userId === profileId) {
      navigate('/profile');
      return;
    }
    const fetch = async () => {
      if (location.pathname.match(/(profile|profile\/)$/) && userId) {
        setIsMyProfile(true);

        let profile = getState();

        if (profile.user === '' && Object.keys(profile).length === 1) {
          profile = (await usersRead(userId)).data;
        }
        setProfileEverywhere(profile);
        return;
      }

      const profile = (await usersRead(profileId!)).data;
      setProfileEverywhere(profile);
    };

    fetch();
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = profileData ? `${profileData.name} ${profileData.second_name}` : prevTitle;

    return () => {
      document.title = prevTitle;
    };
  }, [profileData]);

  const editClickHandler: MouseEventHandler<HTMLElement> = () => {
    return setIsEdit((prev) => !prev);
  };

  const submitHandler = async (values: IProfile) => {
    const profileUpdate = await usersUpdate(userId, values);

    if (profileUpdate.status === 200) {
      setIsEdit(false);
      const updatedProfile = (await usersRead(userId)).data;
      setProfileEverywhere(updatedProfile);
    }
  };

  const reviewSuccessCallback = async () => {
    const data = await usersRead(profileId ?? userId);
    if (data.status === 200) {
      setProfileEverywhere(data.data);
    }
  };

  if (!profileData || profileData?.user === '') {
    return <Center>There is no such profile</Center>;
  }

  return (
    <FormProvider {...method}>
      <SC.Container
        component="form"
        container
        spacing={2}
        onSubmit={method.handleSubmit(submitHandler)}>
        <Grid item lg={4} md={4}>
          <SC.GridItem>
            <ProfileLogo
              votesAverage={profileData.votes_average}
              image={profileData.image || ''}
              position="Full-Stack dev"
              area="Moscow"
              name={profileData.name || ''}
              secondName={profileData.second_name || ''}
              isEdit={isEdit}
              isMyProfile={isMyProfile}
              editClickHandler={editClickHandler}
            />
          </SC.GridItem>
        </Grid>
        <Grid item lg={8} md={8}>
          <SC.GridItem>
            <ProfileMainData
              data={exclude(profileData, ['image', 'skills', 'user', 'projects_count', 'reviews'])}
              isEdit={isEdit}
            />
          </SC.GridItem>
        </Grid>
        <Grid item lg={9} md={7}>
          <SC.GridItem>
            <ProfileSkills skills={profileData.skills ?? []} />
          </SC.GridItem>
        </Grid>
        <Reviews
          placeName="profile"
          placeId={profileData.id ?? ''}
          reviews={profileData.reviews ?? []}
          dataLoadCallback={reviewsProfileCreate}
          successCallback={reviewSuccessCallback}
        />
      </SC.Container>
    </FormProvider>
  );
};

export default Profile;
