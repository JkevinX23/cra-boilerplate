import { memo } from 'react'

import { BackgroundOptionEnum, FontStyleEnum } from './enum'
import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  radius?: 'radius100' | 'radius200' | 'radius300'
  fullWidth?: boolean
  disabled?: boolean
  onClick?: () => void
  background?:
    | 'blue'
    | 'gray'
    | 'green'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'yellow'
  styleFont?: 'regular' | 'semibold' | 'bold' | 'extrabold'
  backgroundOption?: BackgroundOptionEnum
  fontStyle?: FontStyleEnum
}

const Button = memo(
  ({
    children,
    size = 'xsmall',
    radius = 'radius300',
    fullWidth = false,
    disabled = false,
    background = 'blue',
    backgroundOption = BackgroundOptionEnum.twenty,
    fontStyle = FontStyleEnum.regular,
    onClick
  }: ButtonProps) => {
    return (
      <S.Wrapper
        size={size}
        background={background}
        radius={radius}
        fullWidth={fullWidth}
        disabled={disabled}
        onClick={onClick}
        backgroundOption={backgroundOption}
        fontStyle={fontStyle}
      >
        {!!children && <span>{children}</span>}
      </S.Wrapper>
    )
  }
)

export default Button
