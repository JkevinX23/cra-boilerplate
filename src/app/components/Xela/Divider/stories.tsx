import { ComponentMeta, ComponentStory } from '@storybook/react'

import Divider, { DividerProps } from '.'

export default {
  title: 'components/Divider',
  component: Divider,
  args: {} as DividerProps
} as ComponentMeta<typeof Divider>

export const Basic: ComponentStory<typeof Divider> = (props) => (
  <Divider {...props} />
)
