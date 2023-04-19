import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import DivInput from './DivInput';

export default {
  title: 'common/DivInput',
  component: DivInput,
  argTypes: {
    name: {
      defaultValue: 'text',
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof DivInput>;

const Template: ComponentStory<typeof DivInput> = (args) => (
  <StorybookWrapper defaultValues={{ name: 'text' }}>
    <DivInput {...args} />
  </StorybookWrapper>
);

export const Default = Template.bind({});
Default.args = {
  value: 'some string',
  isEdit: false,
};
