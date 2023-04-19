import React, { FC, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Button } from '@/components/atoms';
import OptionsMenu from './OptionsMenu';

export default {
  title: 'common/OptionsMenu',
  component: OptionsMenu,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/projects',
    },
  },
} as Meta<typeof OptionsMenu>;

type Story = StoryObj<typeof OptionsMenu>;

const Template: Story = {
  render: (args) => (
    <StorybookWrapper>
      <OptionsMenu {...args} />
    </StorybookWrapper>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    ref: useRef(<Button label="Open options" />),
    stack: [
      ['profile', '/profile'],
      ['projects', '/projects'],
    ],
  },
};
