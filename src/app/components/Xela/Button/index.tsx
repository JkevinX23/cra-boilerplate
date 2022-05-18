import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  size: 'large' | 'medium' | 'small'
  background:
    | 'blue'
    | 'gray'
    | 'green'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'yellow'
  icon: string
  outline: boolean
  disabled: boolean
}

function Button({
  background,
  icon,
  outline,
  size,
  children,
  disabled
}: ButtonProps) {
  return (
    <S.Wrapper
      background={background}
      size={size}
      outline={outline}
      disabled={disabled}
    >
      {children}
    </S.Wrapper>
  )
}

export default Button
