import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import ImagePicker from './ImagePicker';

export default {
  title: 'atoms/ImagePicker',
  component: ImagePicker,
  argTypes: {
    name: {
      defaultValue: 'image',
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ImagePicker>;

const Template: ComponentStory<typeof ImagePicker> = (args) => (
  <StorybookWrapper defaultValues={{ image: new Blob() }}>
    <ImagePicker {...args} />
  </StorybookWrapper>
);

export const Default = Template.bind({});
Default.args = {
  style: { width: '16rem', height: '16rem' },
};
