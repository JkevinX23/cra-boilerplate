import { useRef } from 'react'
import { useHover } from 'usehooks-ts'

import Icons from '../Icons'
import * as S from './styles'

export type MenuItemProps = {
  icon: string
  text: string
  badge?: number
}

function MenuItem({ icon, text, badge }: MenuItemProps) {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  return (
    <S.Wrapper ref={hoverRef}>
      <S.Box>
        <S.Icon>
          <Icons icon={icon} size={14} weight={isHover ? 'fill' : 'duotone'} />
        </S.Icon>
        <S.Span>{text}</S.Span>
      </S.Box>
      {badge && Number(badge) >= 1 && <S.Badge>{badge}</S.Badge>}
    </S.Wrapper>
  )
}

export default MenuItem
