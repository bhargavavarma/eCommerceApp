import React from 'react'
import { withKnobs, text, object, boolean } from "@storybook/addon-knobs"
import { action } from "mobx"

export default {
  title: 'Buttons/Buttons',
}

export const withButton = () => {
  const primaryButton = {
    padding: '10px',
    fontSize: 25,
    backgroundColor: 'green',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 700,
    outline: 'none',
    textDecoration: 'none'
  }
  return <button onClick={action('clicked')}
    style={object('primaryButton',primaryButton)}>
    {text('Label','primary button')}
  </button>
}

withButton.story = {
  decorators: [withKnobs]
}