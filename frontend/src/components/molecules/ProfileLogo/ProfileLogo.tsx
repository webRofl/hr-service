import React, { FC } from 'react';
import * as SC from './ProfileLogo.style';

interface IProfileLogoProps {
  image: string;
  position: string;
  area: string;
  name: string;
  secondName: string;
}

const ProfileLogo: FC<IProfileLogoProps> = ({ image, position, area, name, secondName }) => {
  return (
    <SC.Container>
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
