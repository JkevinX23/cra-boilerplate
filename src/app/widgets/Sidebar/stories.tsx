import { ComponentMeta, ComponentStory } from '@storybook/react'

import Sidebar, { SidebarProps } from '.'

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  args: {} as SidebarProps
} as ComponentMeta<typeof Sidebar>

export const Basic: ComponentStory<typeof Sidebar> = (props) => (
  <Sidebar {...props} />
)
