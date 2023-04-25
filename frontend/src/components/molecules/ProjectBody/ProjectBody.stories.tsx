import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { StorybookWrapper } from '@/components/common';
import ProjectBody from './ProjectBody';

export default {
  title: 'molecules/ProjectBody',
  component: ProjectBody,
} as Meta<typeof ProjectBody>;

type Story = StoryObj<typeof ProjectBody>;

export const Default: Story = {
  render: (args) => (
    <StorybookWrapper>
      <ProjectBody {...args} />
    </StorybookWrapper>
  ),
  args: {
    // @ts-expect-error something mistake
    content: 'everything as you want',
    isEdit: false,
  },
};
