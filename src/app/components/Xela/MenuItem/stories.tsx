import { ComponentMeta, ComponentStory } from '@storybook/react'

import MenuItem, { MenuItemProps } from '.'

export default {
  title: 'components/MenuItem',
  component: MenuItem,
  args: {} as MenuItemProps
} as ComponentMeta<typeof MenuItem>

export const Basic: ComponentStory<typeof MenuItem> = (props) => (
  <MenuItem {...props} />
)
