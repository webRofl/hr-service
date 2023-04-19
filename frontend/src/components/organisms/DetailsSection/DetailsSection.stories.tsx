import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { StorybookWrapper } from '@/components/common';
import DetailsSection from './DetailsSection';

export default {
  title: 'organisms/DetailsSection',
  component: DetailsSection,
} as Meta<typeof DetailsSection>;

type Story = StoryObj<typeof DetailsSection>;

export const Default: Story = {
  render: (args) => (
    <StorybookWrapper>
      <DetailsSection {...args} />
    </StorybookWrapper>
  ),
};
