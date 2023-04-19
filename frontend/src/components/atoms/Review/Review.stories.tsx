import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Review from './Review';

export default {
  title: 'atoms/Review',
  component: Review,
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const Default = Template.bind({});
Default.args = {};
