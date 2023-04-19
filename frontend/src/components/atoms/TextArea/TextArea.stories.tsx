import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import TextArea from './TextArea';

export default {
  title: 'atoms/TextArea',
  component: TextArea,
  argTypes: {
    name: {
      defaultValue: 'text',
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <StorybookWrapper defaultValues={{ text: '' }}>
    <TextArea {...args} />
  </StorybookWrapper>
);

export const Default = Template.bind({});
Default.args = {};
