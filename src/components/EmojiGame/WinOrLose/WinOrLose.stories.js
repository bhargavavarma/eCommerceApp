import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import WinOrLose from './index'

export default {
   component: WinOrLose,
   title: 'WinOrLose/WinOrLose',
   decorators: [withKnobs]
}

const selectedTheme = {
   light: {
      id: '0',
      displayText: 'Dark Mode',
      color: '#fff',
      textColor: 'black',
      green: 'green',
      red: 'red'
   },
   dark: {
      id: '1',
      displayText: 'Light Mode',
      color: '#2b3945',
      textColor: 'white',
      green: 'green',
      red: 'red'
   }
}

export const DisplayWinOrLOseView = () => (
   <WinOrLose 
   score={text('score', 7)} 
   gameState={text('gameState', "You Win!")}
   selectedTheme={object('selectedTheme', selectedTheme['dark'])}
   />
)

export const knobs = () => (
   <WinOrLose 
   onPlayAgainClick={action('onPlayAgainClick')}
   score={text('score', 7)} 
   gameState={text('gameState', "You Win!")}
   selectedTheme={object('selectedTheme', selectedTheme['dark'])}
   />
)
