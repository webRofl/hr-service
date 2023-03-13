import { DivInput } from '@/components/common';
import { Profile } from '@/store/api/orvalGeneration/models';
import React, { FC, useEffect } from 'react';
import * as SC from './ProfileMainData.style';

interface IProfileMainDataProps {
  data: Profile;
  isEdit: boolean;
  setEditedData: (data: Profile) => void;
}

const ProfileMainData: FC<IProfileMainDataProps> = ({ data, isEdit, setEditedData }) => {
  const blackListKeys = ['image', 'skills', 'user', 'projects'];
  const blockToEditListKeys = ['created', 'email', 'username'];

  const displayData = () => {
    const entriesArray = Object.entries(data);
    return entriesArray.map((entry) => {
      const [key, value] = entry;
      if (!blackListKeys.includes(key)) {
        const changeValueHandler = (value: string) => {
          data[key] = value;
          setEditedData(data);
        };

        return (
          <>
            <SC.RowData style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <SC.KeyData>{key}</SC.KeyData>
              <DivInput
                value={value}
                isEdit={isEdit}
                changeValueHandler={changeValueHandler}
                isBlock={blockToEditListKeys.includes(key)}
              />
            </SC.RowData>
            <SC.DataDivider orientation="horizontal" />
          </>
        );
      }

      return null;
    });
  };

  return displayData();
};

export default ProfileMainData;
