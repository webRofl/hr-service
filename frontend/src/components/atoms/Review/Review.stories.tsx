import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Review from './Review';

export default {
  title: 'atoms/Review',
  component: Review,
} as Meta<typeof Review>;

type Story = StoryObj<typeof Review>;

export const Default: Story = {};
