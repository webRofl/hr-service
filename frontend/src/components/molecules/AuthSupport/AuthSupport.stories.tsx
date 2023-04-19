import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StorybookWrapper from '@/components/common/StorybookWrapper/StorybookWrapper';
import AuthSupport from './AuthSupport';

export default {
  title: 'molecules/AuthSupport',
  component: AuthSupport,
} as ComponentMeta<typeof AuthSupport>;

const Template: ComponentStory<typeof AuthSupport> = () => (
  <StorybookWrapper>
    <AuthSupport />
  </StorybookWrapper>
);

export const Default = Template.bind({});
