import { capitalize } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Catalog, Center } from '@/components/common';
import { ICatalogCardData } from '@/types';
import { ROUTES } from '@/core';
import { useUsersEmployeeListList } from '@/store/api/orvalGeneration/users/users';

const Candidates = () => {
  const { data } = useUsersEmployeeListList();
  const [cardList, setCardList] = useState<ICatalogCardData[] | null>(null);

  useEffect(() => {
    if (data?.data && Object.keys(data?.data).length) {
      const cardList = data?.data?.map((c) => ({
        title: capitalize(`${c.name} ` || '') + capitalize(c.second_name || ''),
        description: c?.bio || '',
        id: c.user || '',
        imgLink: c.image || '',
        tags: c?.skills?.map((s) => s.name || '') || [],
        totalVotes: 0,
        votesRatio: 0,
      }));

      setCardList(cardList);
    }
  }, [data]);

  return cardList?.length ? (
    <Catalog linkWithoutId={ROUTES.EMPLOYEE_PROFILE} cardList={cardList!} />
  ) : (
    <Center>No Users</Center>
  );
};

export default Candidates;
