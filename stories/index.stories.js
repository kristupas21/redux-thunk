import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import '../src/index.scss';

import Button from '../src/app/button/button';

storiesOf('Button', module)
  .add('with text', () => <Button content="Hello world"/>)
.add('active', () => <Button content="Active button" active={true}/>);
