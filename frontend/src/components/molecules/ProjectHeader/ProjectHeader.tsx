import { Grid } from '@mui/material';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextArea } from '@/components/atoms';
import { Center, DivInput, Rating } from '@/components/common';
import { ROUTES } from '@/core';
import { responsesCreate } from '@/store/api/orvalGeneration/responses/responses';
import { SimpleForm, ModalButton, ImagePickerWithCrop } from '@/components/molecules';
import { DefaultFormSubmitHandler } from '@/types';
import { useAuthState, useLocalStorageState } from '@/store';
import { useNotifications } from '@/hooks';
import { useUsersEmployerGetRead } from '@/store/api/orvalGeneration/users/users';
import * as SC from './ProjectHeader.style';

interface IProjectHeaderProps {
  title: string;
  expirience: number;
  salary: number | null;
  imgLink: string;
  setImgLink: (value: string) => void;
  employment: string;
  description: string;
  author: string;
  projectRate: number;
  projectVotesCount: number;
  isEdit: boolean;
}

const ProjectHeader: FC<IProjectHeaderProps> = ({
  title,
  salary,
  imgLink,
  setImgLink,
  expirience,
  employment,
  description,
  author,
  projectRate,
  projectVotesCount,
  isEdit,
}) => {
  const navigate = useNavigate();
  const { createToast } = useNotifications();
  const { data } = useUsersEmployerGetRead(author);
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const { profileType } = useAuthState(({ profileType }) => ({ profileType }));

  const [isOpenResponse, setIsOpenResponse] = useState<boolean>();

  const profileBtnClickHandler = () => {
    navigate(`${ROUTES.EMPLOYER_PROFILE}/${data?.data?.user}`);
  };

  if (!data) {
    return <Center>Wait</Center>;
  }

  const handleClickResponse: DefaultFormSubmitHandler = async (values) => {
    const response = await responsesCreate({
      author: userId,
      target: author,
      text: String(values.text),
    });

    if (response.status !== 201) {
      createToast('Response create error', { variant: 'error' });
      return;
    }

    setIsOpenResponse(false);
  };

  return (
    <>
      <SC.RelativeGrid item md={8} xs={12}>
        <SC.BriefInfo>
          <DivInput value={title} commonStyle={SC.title} isEdit={isEdit} name="title" />
          {isEdit ? (
            <ImagePickerWithCrop name="image" aspect={[16, 9]} setImgLinkOutside={setImgLink} />
          ) : (
            <SC.ProjectImg src={imgLink} alt="project logo" />
          )}
          <SC.Salary>
            <DivInput
              value={salary ? `${salary.toLocaleString('ru')} ₽` : 'Salary is not specified'}
              isEdit={isEdit}
              name="salary"
            />
          </SC.Salary>
          <SC.ProjectRate>
            <Rating value={projectRate} precision={0.5} readOnly tip="Keep your rating in review" />
            <SC.ProjectTotalVotes>{projectVotesCount}</SC.ProjectTotalVotes>
          </SC.ProjectRate>
          <div>
            At least{' '}
            <DivInput
              value={expirience.toString()}
              containerStyle={SC.experience}
              commonStyle={SC.experience}
              isEdit={isEdit}
              name="experience"
            />{' '}
            years experience
          </div>
          <div>{employment}</div>
          <DivInput value={description} isEdit={isEdit} name="description" />
          {profileType !== 'employer' && (
            <ModalButton label="Response" variant="contained" color="info" isOpen={isOpenResponse}>
              <SimpleForm
                defaultValues={{ text: '' }}
                extraComponents={[['text', TextArea]]}
                buttonProps={{ label: 'go', variant: 'contained', color: 'success' }}
                handleSubmitForm={handleClickResponse}
              />
            </ModalButton>
          )}
        </SC.BriefInfo>
      </SC.RelativeGrid>
      <Grid item md={4} xs={12}>
        <SC.AuthorBlock>
          <SC.Img src={data?.data?.image} alt="profile logo" />
          {/* @ts-expect-error something mistake */}
          <div>{data?.data?.name}</div>
          <Rating
            value={data?.data.votes_average}
            precision={0.5}
            readOnly
            tip="Keep your rating in profile page"
          />
          <Button
            label="view"
            variant="outlined"
            style={SC.ProfileBtn}
            onClick={profileBtnClickHandler}
          />
        </SC.AuthorBlock>
      </Grid>
    </>
  );
};

export default ProjectHeader;
