import { IconComponent } from '@/components/common';
import { GlobalENV } from '@/types';
import React, { FC, MouseEventHandler, useEffect } from 'react';
import * as SC from './ProfileLogo.style';

interface IProfileLogoProps {
  image: string;
  position: string;
  area: string;
  name: string;
  secondName: string;
  isEdit: boolean;
  isMyProfile: boolean;

  editClickHandler: MouseEventHandler<HTMLElement>;
  submitHandler: MouseEventHandler<HTMLElement>;
}

const ProfileLogo: FC<IProfileLogoProps> = ({
  image,
  position,
  area,
  name,
  secondName,
  isEdit,
  isMyProfile,
  editClickHandler,
  submitHandler,
}) => {
  return (
    <SC.Container>
      {isMyProfile && (
        <SC.EditBtn onClick={editClickHandler} data-isedit={isEdit}>
          <IconComponent style={SC.editIconStyles} name="edit" />
        </SC.EditBtn>
      )}
      <SC.Logo src={`${GlobalENV.FQDN_BACKEND}${image}`} alt={area} />
      <SC.Name>
        {name} {secondName}
      </SC.Name>
      <div>{position}</div>
      <div>{area}</div>
      {isMyProfile && (
        <SC.SubmitBtn data-isedit={isEdit} onClick={submitHandler}>
          <IconComponent style={SC.editIconStyles} name="check_mark_circle" />
        </SC.SubmitBtn>
      )}
    </SC.Container>
  );
};

export default ProfileLogo;
