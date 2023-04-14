import { Grid } from '@mui/material';
import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Center, Reviews } from '@/components/common';
import { ProfileLogo, ProfileMainData, ProfileSkills } from '@/components/molecules';
import { reviewsProfileCreate } from '@/store/api/orvalGeneration/reviews/reviews';
import { exclude } from '@/utils';
import { useTitleToggle } from '@/hooks';
import { usersEmployeeUpdate } from '@/store/api/orvalGeneration/users/users';
import { EmployeeProfile, Profile as IProfile } from '../../../store/api/orvalGeneration/models';
import * as SC from './Profile.style';

interface EmployeeProfileProps {
  profileData: Required<EmployeeProfile>;
  userId: string;
  profileId: string;

  setToggleToFetch: (prev: boolean) => void;
}

const Profile: FC<EmployeeProfileProps> = ({
  profileData,
  userId,
  profileId,
  setToggleToFetch,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isMyProfile, setIsMyProfile] = useState(false);
  useTitleToggle(`${profileData?.name} ${profileData?.second_name}`);

  const method = useForm<IProfile>({
    defaultValues: profileData,
  });

  const setProfileEverywhere = (profile: IProfile) => {
    // setProfileData(profile);
    method.reset(profile);
  };

  useEffect(() => {
    if (!Object.keys(method.getValues()).keys && profileData) {
      method.reset(profileData);
    }
  }, [profileData, method]);

  useEffect(() => {
    if (profileId === userId) {
      setIsMyProfile(true);
    }
  }, [profileId, userId]);

  const editClickHandler: MouseEventHandler<HTMLElement> = () => {
    return setIsEdit((prev) => !prev);
  };

  const submitHandler = (values: IProfile) => {
    usersEmployeeUpdate(userId, values).then(() => setToggleToFetch((prev: boolean) => !prev));
  };

  const reviewSuccessCallback = async () => {
    // const data = await usersEmployeeRead(profileId ?? userId);
    // if (data.status === 200) {
    //   setProfileEverywhere(data.data);
    // }
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
              data={exclude(profileData, [
                'image',
                'skills',
                'user',
                'total_votes',
                'votes_average',
                'reviews',
                'id',
                'work_places',
              ])}
              isEdit={isEdit}
            />
          </SC.GridItem>
        </Grid>
        <Grid item lg={9} md={7}>
          <SC.GridItem>
            <ProfileSkills skills={profileData.skills} />
          </SC.GridItem>
        </Grid>
        <Reviews
          placeName="profile"
          placeId={profileId}
          reviews={profileData.reviews}
          dataLoadCallback={reviewsProfileCreate}
          successCallback={reviewSuccessCallback}
        />
      </SC.Container>
    </FormProvider>
  );
};

export default Profile;
