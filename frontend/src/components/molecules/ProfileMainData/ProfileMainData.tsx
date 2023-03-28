import { DivInput } from '@/components/common';
import { Profile } from '@/store/api/orvalGeneration/models';
import React, { FC } from 'react';
import * as SC from './ProfileMainData.style';

interface IProfileMainDataProps {
  data: Partial<Profile>;
  isEdit: boolean;
}

const ProfileMainData: FC<IProfileMainDataProps> = ({ data, isEdit }) => {
  const blockToEditListKeys = ['created', 'email', 'username'];

  const displayData = () => {
    const entriesArray = Object.entries(data);
    return entriesArray.map(([key, value]) => {
      if (blockToEditListKeys.includes(key)) return null;

      return (
        <>
          <SC.RowData>
            <SC.KeyData>{key}</SC.KeyData>
            <DivInput
              value={value}
              isEdit={isEdit}
              name={key}
              readOnly={blockToEditListKeys.includes(key)}
            />
          </SC.RowData>
          <SC.DataDivider orientation="horizontal" />
        </>
      );
    });
  };

  return displayData();
};

export default ProfileMainData;
