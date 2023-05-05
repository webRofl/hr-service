/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { DivInput } from '@/components/common';
import { Profile } from '@/store/api/orvalGeneration/models';
import { stringUtils } from '@/utils';
import * as SC from './ProfileMainData.style';

interface IProfileMainDataProps {
  data: Partial<Profile>;
  isEdit: boolean;
}

// @ts-expect-error something mistake
const ProfileMainData: FC<IProfileMainDataProps> = ({ data, isEdit }) => {
  const blockToEditListKeys = ['created', 'email', 'username'];

  const displayData = () => {
    const entriesArray = Object.entries(data);
    return entriesArray.map(([key, value]) => {
      if (
        blockToEditListKeys.includes(key)
        || key === 'description'
        || ((value === 'null' || value === null) && !isEdit)
      ) {
        return null;
      }

      return (
        <>
          <SC.RowData>
            <SC.KeyData>{stringUtils.prettyString(key)}</SC.KeyData>
            <DivInput
              // @ts-expect-error something mistake
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
