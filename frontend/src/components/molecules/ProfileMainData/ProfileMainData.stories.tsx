import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { StorybookWrapper } from '@/components/common';
import ProfileMainData from './ProfileMainData';

export default {
  title: 'molecules/ProfileMainData',
  component: ProfileMainData,
} as Meta<typeof ProfileMainData>;

type Story = StoryObj<typeof ProfileMainData>;

export const Default: Story = {
  render: (args) => (
    <StorybookWrapper>
      <ProfileMainData {...args} />
    </StorybookWrapper>
  ),
  args: {
    isEdit: false,
    data: {
      bio: 'my bio',
      city: 'moscow',
      email: 'pp@1.ru',
      github: 'github.com/webRofl',
      linkedin: 'blocked',
      name: 'myname',
      second_name: 'myfam',
      username: 'webrofl',
    },
  },
};
