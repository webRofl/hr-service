import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import OAuth from './OAuth';

export default {
  title: 'atoms/OAuth',
  component: OAuth,
} as ComponentMeta<typeof OAuth>;

const Template: ComponentStory<typeof OAuth> = (args) => <OAuth {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Type whatever you want',
  href: 'google.com',
};
