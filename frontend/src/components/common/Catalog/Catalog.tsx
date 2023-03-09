import { CatalogCard } from '@/components/molecules';
import { ICatalogCardData } from '@/types';
import React, { FC } from 'react';
import * as SC from './Catalog.style';

interface ICatalogProps {
  cardList: ICatalogCardData[];
}

const Catalog: FC<ICatalogProps> = ({ cardList }) => {
  return (
    <SC.CardsContainer>
      {cardList.map((card) => (
        <CatalogCard key={card.id} {...card} />
      ))}
    </SC.CardsContainer>
  );
};

export default Catalog;
