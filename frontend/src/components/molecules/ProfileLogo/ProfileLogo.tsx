import React, { FC, MouseEventHandler } from 'react';
import { IconComponent, Rating } from '@/components/common';
import { ImagePickerWithCrop } from '@/components/molecules';
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
      {isEdit ? (
        <ImagePickerWithCrop name="image" aspect={[1, 1]} style={SC.logo} />
      ) : (
        <img src={image} alt={area} style={SC.logo} />
      )}
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
