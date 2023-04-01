import { Catalog, Center } from '@/components/common';
import { useUsersList } from '@/store/api/orvalGeneration/users/users';
import { GlobalENV, ICatalogCardData } from '@/types';
import { capitalize } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Candidates = () => {
  const { data } = useUsersList();
  const [cardList, setCardList] = useState<ICatalogCardData[] | null>(null);

  useEffect(() => {
    if (data?.data && Object.keys(data?.data).length) {
      const cardList = data?.data?.map((c) => ({
        title: capitalize(`${c.name} ` || '') + capitalize(c.second_name || ''),
        description: c?.bio?.slice(0, 180) || '',
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
    <Catalog linkWiuthoutId={`${GlobalENV.FQDN_FRONTEND}profile`} cardList={cardList!} />
  ) : (
    <Center>No Users</Center>
  );
};

export default Candidates;
