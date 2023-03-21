import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormInput from './FormInput';

export default {
  title: 'atoms/FormInput',
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'email',
};
