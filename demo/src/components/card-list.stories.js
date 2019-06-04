import React from 'react'

import { storiesOf } from '@storybook/react'

import CardList from './card-list.js'
import posts from '../data/posts'

storiesOf('Card List', module).add('Basic card list example', () => (
  <React.Fragment>
    <CardList posts={posts} />
  </React.Fragment>
))
