import React from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Button from './Button';

const meta: ComponentMeta<typeof Button> = {
  title: 'My Button',
  component: Button,
};

export default meta;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    label: 'primary',
  },
};
