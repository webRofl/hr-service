import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Rating from './Rating';

export default {
  title: 'common/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalVotes: 16,
  defaultValue: 3.5,
  precision: 0.5,
  tip: 'U can change the tip',
};
