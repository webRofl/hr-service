import { CatalogCard } from '@/components/molecules';
import { useUsersList } from '@/store/api/orvalGeneration/users/users';
import React, { useEffect } from 'react';

const Candidates = () => {
  const { data } = useUsersList();

  return (
    <>
      <span>yes</span>
      {data?.data?.map((p) => (
        <CatalogCard
          key={p.id}
          title={p.title || ''}
          description={p.description || ''}
          slug={p.slug || ''}
          imgLink={p.image || ''}
          tags={[]}
          totalVotes={p.total_votes || 0}
          votesRatio={p.votes_ratio || 0}
        />
      ))}
    </>
  );
};

export default Candidates;
