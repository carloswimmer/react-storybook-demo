import React from 'react'
import { Button } from '@material-ui/core'

export default {
  title: 'Material/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = (args) => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Success',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'contained',
  color: 'secondary',
  children: 'Danger',
}

export const Log = Template.bind({})
Log.args = {
  disabled: false,
  variant: 'outlined',
  color: 'secondary',
  children: 'Log',
  onClick: () => console.log('Button clicked'),
}
