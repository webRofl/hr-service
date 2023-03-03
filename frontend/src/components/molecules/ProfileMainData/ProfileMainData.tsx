import { Profile } from '@/store/api/orvalGeneration/models';
import React, { FC } from 'react';
import * as SC from './ProfileMainData.style';

interface IProfileMainDataProps {
  data: Profile;
}

const ProfileMainData: FC<IProfileMainDataProps> = ({ data }) => {
  const blackListKeys = ['image'];

  const displayData = () => {
    const entriesArray = Object.entries(data);
    return entriesArray.map((entry) => {
      const [key, value] = entry;
      if (value && !blackListKeys.includes(key)) {
        return (
          <>
            <SC.RowData style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <SC.KeyData>{key}</SC.KeyData>
              <SC.ValueData>{value}</SC.ValueData>
            </SC.RowData>
            <SC.DataDivider orientation="horizontal" />
          </>
        );
      }

      return null;
    });
  };

  return <>{displayData()}</>;
};

export default ProfileMainData;
