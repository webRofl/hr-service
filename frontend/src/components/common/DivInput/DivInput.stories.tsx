import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import DivInput from './DivInput';

export default {
  title: 'common/DivInput',
  component: DivInput,
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof DivInput>;

type Story = StoryObj<typeof DivInput>;

const Template: Story = {
  render: (args) => (
    <StorybookWrapper defaultValues={{ name: 'text' }}>
      <DivInput {...args} />
    </StorybookWrapper>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    name: 'text',
    value: 'some string',
    isEdit: false,
  },
};
