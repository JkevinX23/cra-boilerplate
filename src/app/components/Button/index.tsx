import { memo } from 'react'

import * as S from './styles'
import { ButtonProps } from './types'

const Button = memo((props: ButtonProps) => {
  return (
    <S.Wrapper>
      <h1>Button</h1>
    </S.Wrapper>
  )
})

export default Button
