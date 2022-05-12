import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {} as ButtonProps
} as ComponentMeta<typeof Button>

export const Basic: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
)
