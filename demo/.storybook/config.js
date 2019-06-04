import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyle from '../src/components/global-style'

const GlobalStylesDecorator = storyFn => (
  <React.Fragment>
    <GlobalStyle />
    {storyFn()}
  </React.Fragment>
)
addDecorator(GlobalStylesDecorator)

const req = require.context('../src/components', true, /\.stories\.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
