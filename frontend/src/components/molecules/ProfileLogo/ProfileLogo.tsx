import React, { FC, MouseEventHandler, useEffect } from 'react';
import * as SC from './ProfileLogo.style';

interface IProfileLogoProps {
  image: string;
  position: string;
  area: string;
  name: string;
  secondName: string;
  isEdit: boolean;
  editClickHandler: MouseEventHandler<HTMLElement>;
}

const ProfileLogo: FC<IProfileLogoProps> = ({
  image,
  position,
  area,
  name,
  secondName,
  editClickHandler,
  isEdit,
}) => {
  return (
    <SC.Container>
      <SC.EditBtn onClick={editClickHandler}>edit: {isEdit}</SC.EditBtn>
      <SC.Logo src={`http://localhost:8000${image}`} alt={area} />
      <SC.Name>
        {name} {secondName}
      </SC.Name>
      <div>{position}</div>
      <div>{area}</div>
    </SC.Container>
  );
};

export default ProfileLogo;
