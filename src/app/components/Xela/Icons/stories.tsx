import { ComponentMeta, ComponentStory } from '@storybook/react'

import Icons, { IconsProps } from '.'

export default {
  title: 'components/Icons',
  component: Icons,
  args: {} as IconsProps
} as ComponentMeta<typeof Icons>

export const Basic: ComponentStory<typeof Icons> = (props) => (
  <Icons {...props} />
)
