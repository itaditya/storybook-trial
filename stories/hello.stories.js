import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Hello from '../Hello';

const module = 'hmr'

storiesOf('Hello', module)
  .add('default', () => <Hello message={'default'} onClick={action('hello')} />)
  .add('with message only', () => <Hello message={'hello'} />)
