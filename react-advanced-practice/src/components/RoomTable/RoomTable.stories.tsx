/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoomTable } from './index';

export default {
  title: 'Components/RoomTable',
  component: RoomTable
} as ComponentMeta<typeof RoomTable>;

export const Template: ComponentStory<typeof RoomTable> = () => <RoomTable />;
