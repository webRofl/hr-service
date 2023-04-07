import React, { FC } from 'react';
import { EmployeeProfile, EmployerProfileRetrieve } from '@/store/api/orvalGeneration/models';

interface EmployerProfileProps {
  profileData: EmployeeProfile | EmployerProfileRetrieve;
}

const EmployerProfile: FC<EmployerProfileProps> = ({ profileData }) => {
  return <div>employer profile</div>;
};

export default EmployerProfile;
