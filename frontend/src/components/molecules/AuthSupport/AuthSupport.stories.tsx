import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import AuthSupport from './AuthSupport';

export default {
  title: 'molecules/AuthSupport',
  component: AuthSupport,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/projects',
    },
  },
} as Meta<typeof AuthSupport>;

type Story = StoryObj<typeof AuthSupport>;

const Template: Story = {
  render: () => (
    <StorybookWrapper>
      <AuthSupport />
    </StorybookWrapper>
  ),
};

export const Default = {
  ...Template,
};
