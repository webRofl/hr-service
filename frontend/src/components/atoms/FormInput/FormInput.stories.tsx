import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { StorybookWrapper } from '@/components/common';
import FormInput from './FormInput';

export default {
  title: 'atoms/FormInput',
  component: FormInput,
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof FormInput>;

type Story = StoryObj<typeof FormInput>;

const Template: Story = {
  render: (args) => (
    <StorybookWrapper defaultValues={{ [args.name]: '' }}>
      <FormInput {...args} />
    </StorybookWrapper>
  ),
};

export const Default = {
  ...Template,
  args: {
    name: 'email',
  },
};
