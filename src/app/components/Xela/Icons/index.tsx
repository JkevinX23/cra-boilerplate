import {
  CaretLeft,
  ChartPieSlice,
  ChatText,
  CreditCard,
  DotsThree,
  FlagBanner,
  House,
  MagnifyingGlass,
  Percent,
  ShoppingBag,
  Sliders,
  Tag,
  UserCircle
} from 'phosphor-react'
import theme from 'styles/theme'

import * as S from './styles'

export type IconsProps = {
  icon: string
  size: number
  weight: 'duotone' | 'fill' | 'light'
}

function Icons({ icon, size, weight = 'duotone' }: IconsProps) {
  switch (icon) {
    case 'home':
      return <House color={theme.colors.blue[20]} size={size} weight={weight} />
    case 'dashboard':
      return (
        <ChartPieSlice
          color={theme.colors.blue[20]}
          size={size}
          weight={weight}
        />
      )
    case 'product':
      return <Tag color={theme.colors.blue[20]} size={size} weight={weight} />
    case 'event':
      return (
        <FlagBanner color={theme.colors.blue[20]} size={size} weight={weight} />
      )
    case 'user':
      return (
        <UserCircle color={theme.colors.blue[20]} size={size} weight={weight} />
      )
    case 'sales':
      return (
        <ShoppingBag
          color={theme.colors.blue[20]}
          size={size}
          weight={weight}
        />
      )
    case 'discount':
      return (
        <Percent color={theme.colors.blue[20]} size={size} weight={weight} />
      )
    case 'payments':
      return (
        <CreditCard color={theme.colors.blue[20]} size={size} weight={weight} />
      )
    case 'messages':
      return (
        <ChatText color={theme.colors.blue[20]} size={size} weight={weight} />
      )
    case 'settings':
      return (
        <Sliders color={theme.colors.blue[20]} size={size} weight={weight} />
      )
    case 'back':
      return (
        <CaretLeft color={theme.colors.blue[20]} size={size} weight={weight} />
      )
    case 'search':
      return (
        <MagnifyingGlass
          color={theme.colors.blue[20]}
          size={size}
          weight={weight}
        />
      )
    case 'menu':
      return (
        <DotsThree color={theme.colors.blue[20]} size={size} weight={weight} />
      )
    default:
      return <div />
  }
}

export default Icons
