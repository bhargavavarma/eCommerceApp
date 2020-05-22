import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import { SignInButton } from './SignInPage'

export default {
    component: SignInButton,
    title: 'SignInPage/SignInButton'
}

export const DefaultView = () => (
    <SignInButton />
)

export const knobs = () => (
    <SignInButton  color={color('color', 'red')} />
)

knobs.story = {
    decorators: [withKnobs]
}
