import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Rating from './Rating';

export default {
  title: 'common/Rating',
  component: Rating,
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Rating>;

type Story = StoryObj<typeof Rating>;

const Template: Story = {
  render: (args) => <Rating {...args} />,
  args: {
    totalVotes: 16,
    defaultValue: 3.5,
    precision: 0.5,
    tip: 'U can change the tip',
    readOnly: false,
    disabled: false,
  },
};

export const Default = {
  ...Template,
};
