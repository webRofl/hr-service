import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import OAuthContainer from './OAuthContainer';

export default {
  title: 'molecules/OAuthContainer',
  component: OAuthContainer,
} as Meta<typeof OAuthContainer>;

type Story = StoryObj<typeof OAuthContainer>;

export const Default: Story = {
  render: (args) => <OAuthContainer {...args} />,
};
