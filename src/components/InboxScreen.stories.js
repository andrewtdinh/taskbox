import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';

import { PureInboxScreen } from './InboxScreen';

import store from '../lib/redux';

storiesOf('InboxScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <PureInboxScreen />)
  .add('error', () => <PureInboxScreen error="Something" />);