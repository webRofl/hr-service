import { IconComponent, Rating } from '@/components/common';
import { GlobalENV } from '@/types';
import React, { FC, MouseEventHandler, useEffect } from 'react';
import * as SC from './ProfileLogo.style';

interface IProfileLogoProps {
  votesAverage: number;
  image: string;
  position: string;
  area: string;
  name: string;
  secondName: string;
  isEdit: boolean;
  isMyProfile: boolean;

  editClickHandler: MouseEventHandler<HTMLElement>;
}

const ProfileLogo: FC<IProfileLogoProps> = ({
  votesAverage,
  image,
  position,
  area,
  name,
  secondName,
  isEdit,
  isMyProfile,
  editClickHandler,
}) => {
  return (
    <SC.Container>
      {isMyProfile && (
        <SC.EditBtn onClick={editClickHandler} data-isedit={isEdit}>
          <IconComponent style={SC.editIconStyles} name="edit" />
        </SC.EditBtn>
      )}
      <Rating value={votesAverage} readOnly tip="leave me a couple of reviews bottom" />
      <SC.Logo src={image} alt={area} />
      <SC.Name>
        {name} {secondName}
      </SC.Name>
      <div>{position}</div>
      <div>{area}</div>
      {isMyProfile && (
        <SC.SubmitBtn data-isedit={isEdit} type="submit">
          <IconComponent style={SC.editIconStyles} name="check_mark_circle" />
        </SC.SubmitBtn>
      )}
    </SC.Container>
  );
};

export default ProfileLogo;
