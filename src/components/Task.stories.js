import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

// storiesOf('Task', module)
//   .add('default', () => <Task task={task} {...actions} />)
//   .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
//   .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);

export default { title: 'Task'};

export const withInboxState = () => <Task task={task} {...actions} />
export const withPinnedState = () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />
export const withArchivedState = () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />