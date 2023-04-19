import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import EmployerProfileHeader from './EmployerProfileHeader';

export default {
  title: 'molecules/EmployerProfileHeader',
  component: EmployerProfileHeader,
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof EmployerProfileHeader>;

type Story = StoryObj<typeof EmployerProfileHeader>;

const Template: Story = {
  render: (args) => (
    <StorybookWrapper defaultValues={{ name: 'text' }}>
      <EmployerProfileHeader {...args} />
    </StorybookWrapper>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    title: 'title',
    city: 'moscow',
    image: '',
    projectsCount: 167,
    website: '',
    totalVotes: 1245,
    votesAverage: 2.4,
  },
};
