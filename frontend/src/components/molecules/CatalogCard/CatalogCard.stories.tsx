import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import CatalogCard from './CatalogCard';

export default {
  title: 'molecules/CatalogCard',
  component: CatalogCard,
} as ComponentMeta<typeof CatalogCard>;

const Template: ComponentStory<typeof CatalogCard> = (args) => (
  <StorybookWrapper defaultValues={{ image: new Blob() }}>
    <CatalogCard {...args} />
  </StorybookWrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: 'best project in the world!',
  description: 'description for this project',
  link: '#',
  imgLink:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png',
  tags: [],
  totalVotes: 395,
  votesRatio: 2.1,
};
