import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ErrorFallback from './ErrorFallback';

export default {
  title: 'common/ErrorFallback',
  component: ErrorFallback,
} as ComponentMeta<typeof ErrorFallback>;

const Template: ComponentStory<typeof ErrorFallback> = (args) => <ErrorFallback {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: 'some string or ur error',
};
