import React, { FC } from 'react';
import { CatalogCard, PopupCard } from '@/components/molecules';
import * as SC from './Catalog.style';
import { ICatalogProps, IPopupCatalogProps } from './Catalog.type';

export const Catalog: FC<ICatalogProps> = ({ cardList, linkWithoutId }) => {
  return (
    <SC.CardsContainer>
      {cardList.map((card) => (
        <CatalogCard key={card.id} link={`${linkWithoutId ?? ''}/${card.id}`} {...card} />
      ))}
    </SC.CardsContainer>
  );
};

export const PopupCatalog: FC<IPopupCatalogProps> = ({ cardList }) => {
  return (
    <SC.PopupCardsContainer>
      {cardList.map((card) => (
        <PopupCard title={card.author.username} text={card.text} time={card.created!} />
      ))}
    </SC.PopupCardsContainer>
  );
};
