import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color, object } from '@storybook/addon-knobs'

import { InputFields } from './SignInPage'

export default {
   component: InputFields,
   title: 'InputFields/InputFields'
}

const style = {
   border: '1px solid gray',
   width: '200px',
   margin: '10px',
   borderRadius: '10px'
}

export const DefaultView = () => {
   return (
      <InputFields
         value=''
         color={color('color', 'red')}
         style={object('Style', style)}
      />
   )
}

export const knobs = () => {
   return (
      <InputFields
         color={color('color', 'red')}
         style={object('Style', style)}
         value={text('value', 'bhargav')}
      />
   )
}

knobs.story = {
   decorators: [withKnobs]
}
