import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import TextArea from './TextArea';

export default {
  title: 'atoms/TextArea',
  component: TextArea,
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

const Template: Story = {
  render: (args) => (
    <StorybookWrapper defaultValues={{ text: '' }}>
      <TextArea {...args} />
    </StorybookWrapper>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    name: 'text',
  },
};
