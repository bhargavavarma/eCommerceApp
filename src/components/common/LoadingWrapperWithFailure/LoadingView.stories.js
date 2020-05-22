import React from 'react'

import '../../../styles/tailwind.css'
import LoadingView from './LoadingView'
import { withKnobs, color } from '@storybook/addon-knobs'

export default {
   component: LoadingView,
   title: 'Common/LoadingView'
}

export const defaultView = () => <LoadingView />

export const knobs = () => <LoadingView fill={color('fill', '#00BFFF')} />

knobs.story = {
   decorators: [withKnobs]
}
