import React from 'react'

import { storiesOf } from '@storybook/react'

import Card from './card.js'

storiesOf('Card', module).add('Basic Card example', () => (
  <React.Fragment>
    <Card
      title='Cape Town, South Africa'
      image='images/destination-cards/cape-town-card-600x400.png'
      summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...'
    />
  </React.Fragment>
))
