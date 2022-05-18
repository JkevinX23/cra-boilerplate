import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button, { ButtonProps } from '.'
import { BackgroundOptionEnum, FontStyleEnum } from './enum'

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    background: {
      name: 'Cor',
      options: [
        'blue',
        'gray',
        'green',
        'orange',
        'pink',
        'purple',
        'red',
        'yellow'
      ],
      control: { type: 'select' },
      defaultValue: 'blue'
    },
    size: {
      name: 'Tamanho',
      options: ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'select' },
      defaultValue: 'xxsmall'
    },
    radius: {
      name: 'Bordas',
      options: ['radius100', 'radius200', 'radius300'],
      control: { type: 'select' },
      defaultValue: 'radius100'
    },
    children: {
      name: 'Texto',
      type: 'string'
    },
    fullWidth: {
      name: 'Tamanho total'
    },
    disabled: {
      name: 'Desabilitar'
    },
    backgroundOption: {
      name: 'Intensidade da cor',
      options: Object.values(BackgroundOptionEnum).filter(
        (x) => typeof x === 'number'
      ),
      control: { type: 'select' },
      defaultValue: BackgroundOptionEnum.twenty
    },
    styleFont: {
      name: 'Estilo da fonte',
      control: { type: 'select' },
      options: Object.values(FontStyleEnum).filter((x) => typeof x === 'string')
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Button',
  disabled: false,
  fullWidth: false
}
// Primary.args = {
//   background: 'blue',
//   children: 'Button',
//   disabled: false,
//   fullWidth: false,
//   size: 'xxsmall',
//   radius: 'radius100'
// }
