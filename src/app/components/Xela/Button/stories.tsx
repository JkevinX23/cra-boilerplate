import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'components/Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Basic: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
)

Basic.args = {
  children: 'Kevin'
}
