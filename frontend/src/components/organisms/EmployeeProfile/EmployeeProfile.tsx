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
import { EmployeeProfile } from '@/store/api/orvalGeneration/models';
import { useProfileState } from '@/store';
import * as SC from './EmployeeProfile.style';

interface EmployeeProfileProps {
  userId: string;
  profileId: string;
}

const Profile: FC<EmployeeProfileProps> = ({ userId, profileId }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [profileData, setProfileData] = useState<EmployeeProfile>();
  const { setProfile } = useProfileState();
  useTitleToggle(`${profileData?.name} ${profileData?.second_name}`);

  const method = useForm<EmployeeProfile>({
    defaultValues: profileData,
  });

  const setProfileEverywhere = (profile: EmployeeProfile) => {
    setProfileData(profile);
    if (isMyProfile) {
      setProfile(profile);
      method.reset(profile);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const data = (await usersEmployeeGetRead(profileId ?? userId)).data;
      setProfileData(data);
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

  const submitHandler = async (values: EmployeeProfile) => {
    if (!values?.salary) {
      values.salary = 0;
    }

    // @ts-expect-error invalid orval type definition
    await usersEmployeeUpdate(userId, values);
    setIsEdit(false);
    const data = (await usersEmployeeGetRead(userId)).data;
    setProfileEverywhere(data);
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
        // @ts-expect-error MUI error
        component="form"
        container
        spacing={2}
        onSubmit={method.handleSubmit(submitHandler)}>
        <Grid item md={4} xs={12}>
          <SC.GridItem>
            <ProfileLogo
              votesAverage={profileData.votes_average ?? 0}
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
        <Grid item md={8} xs={12}>
          <SC.GridItem>
            <ProfileMainData
              // @ts-expect-error using generic
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
        <Grid>
          <SC.GridItem>
            {/* @ts-expect-error something mistake */}
            <ProfileSkills skills={profileData.skills ?? []} />
          </SC.GridItem>
        </Grid>
        <RichTextEditor name="description" isEdit={isEdit} />
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
