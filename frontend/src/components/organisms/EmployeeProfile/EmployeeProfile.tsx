import { Grid } from '@mui/material';
import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Center, Reviews } from '@/components/common';
import { ProfileLogo, ProfileMainData, ProfileSkills } from '@/components/molecules';
import { reviewsProfileCreate } from '@/store/api/orvalGeneration/reviews/reviews';
import { objectUtils } from '@/utils';
import { useTitleToggle } from '@/hooks';
import { usersEmployeeGetRead, usersEmployeeUpdate } from '@/store/api/orvalGeneration/users/users';
import { RichTextEditor } from '@/components/atoms';
import { EmployeeProfile, Profile as IProfile } from '../../../store/api/orvalGeneration/models';
import * as SC from './EmployeeProfile.style';

interface EmployeeProfileProps {
  userId: string;
  profileId: string;
}

const Profile: FC<EmployeeProfileProps> = ({ userId, profileId }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [profileData, setProfileData] = useState<EmployeeProfile>(null);
  useTitleToggle(`${profileData?.name} ${profileData?.second_name}`);

  const method = useForm<EmployeeProfile>({
    defaultValues: profileData,
  });

  const setProfileEverywhere = (profile: EmployeeProfile) => {
    setProfileData(profile);
    method.reset(profile);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = (await usersEmployeeGetRead(profileId ?? userId)).data;
      setProfileEverywhere(data);
    };

    fetch();
  }, []);

  useEffect(() => {
    if (profileId === userId) {
      setIsMyProfile(true);
    }
  }, [profileId, userId]);

  const editClickHandler: MouseEventHandler<HTMLElement> = () => {
    return setIsEdit((prev) => !prev);
  };

  const submitHandler = (values: EmployeeProfile) => {
    if (!values?.salary) {
      values.salary = 0;
    }

    usersEmployeeUpdate(userId, values).then((data) => {
      setIsEdit(false);
      setProfileEverywhere(data?.data);
    });
  };

  const reviewSuccessCallback = async () => {
    const data = await usersEmployeeGetRead(profileId ?? userId);
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
              image={profileData.image ?? ''}
              position={profileData.position}
              area={profileData.city ?? ''}
              name={profileData.name ?? ''}
              secondName={profileData.second_name ?? ''}
              isEdit={isEdit}
              isMyProfile={isMyProfile}
              editClickHandler={editClickHandler}
            />
          </SC.GridItem>
        </Grid>
        <Grid item lg={8} md={8}>
          <SC.GridItem>
            <ProfileMainData
              data={objectUtils.exclude(profileData, [
                'image',
                'skills',
                'user',
                'total_votes',
                'votes_average',
                'reviews',
                'id',
                'work_places',
                // 'description',
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
        <Grid item lg={12} md={12}>
          <RichTextEditor name="description" isEdit={isEdit} />
        </Grid>
        <Reviews
          placeName="profile"
          placeId={profileId}
          reviews={profileData.reviews ?? []}
          dataLoadCallback={reviewsProfileCreate}
          successCallback={reviewSuccessCallback}
        />
      </SC.Container>
    </FormProvider>
  );
};

export default Profile;
