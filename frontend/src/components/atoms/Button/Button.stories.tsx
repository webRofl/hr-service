import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'primary',
  },
};
