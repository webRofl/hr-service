import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Center from './Center';

export default {
  title: 'common/Center',
  component: Center,
} as ComponentMeta<typeof Center>;

// eslint-disable-next-line react/destructuring-assignment
const Template: ComponentStory<typeof Center> = (args) => <Center>{args.children}</Center>;

export const Default = Template.bind({});
Default.args = {
  children: <div>Text on center.</div>,
};
