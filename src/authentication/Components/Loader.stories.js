import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color, object } from '@storybook/addon-knobs'

import { LoadingSpinner } from './SignInPage'

export default {
   component: LoadingSpinner,
   title: 'Loaders/loadingSpinner'
}

const style = {
   width: '50px',
   height: '50px'
}

export const DefaultView = () => <LoadingSpinner />

export const knobs = () => (
   <LoadingSpinner
      color={color('color', 'red')}
      style={object('Style',style)}
   />
)

knobs.story = {
   decorators: [withKnobs]
}
