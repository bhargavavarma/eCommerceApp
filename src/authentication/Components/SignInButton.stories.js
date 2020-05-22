import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs'

import { SignInButton } from './SignInPage'

export default {
   component: SignInButton,
   title: 'buttons/SignInButton'
}

export const DefaultView = () => <SignInButton />

export const Loader = () => (
   <SignInButton loadingSpinner={boolean('loadingSpinner', true)} />
)

export const knobs = () => <SignInButton color={color('color', 'red')} />

knobs.story = {
   decorators: [withKnobs]
}
