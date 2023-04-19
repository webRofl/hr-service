import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import OptionsMenu from './OptionsMenu';

export default {
  title: 'common/OptionsMenu',
  component: OptionsMenu,
} as ComponentMeta<typeof OptionsMenu>;

const Template: ComponentStory<typeof OptionsMenu> = (args) => (
  <StorybookWrapper>
    <OptionsMenu {...args} />
  </StorybookWrapper>
);

export const Default = Template.bind({});
Default.args = {
  stack: [
    ['profile', '/profile'],
    ['projects', '/projects'],
  ],
};
