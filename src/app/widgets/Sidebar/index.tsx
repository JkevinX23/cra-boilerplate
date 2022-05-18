import Divider from 'app/components/Xela/Divider'
import Icons from 'app/components/Xela/Icons'
import MenuItem from 'app/components/Xela/MenuItem'

import * as S from './styles'

export type SidebarProps = {}

function Sidebar(props: SidebarProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src='images/logo.svg' />
        <Icons icon='back' size={15} weight='light' />
      </S.Header>
      <S.Search>
        <input type='text' placeholder='Search' />
        <S.SearchIcon>
          <Icons icon='search' size={20} weight='light' />
        </S.SearchIcon>
      </S.Search>

      <MenuItem icon='home' text='Home' />
      <MenuItem icon='dashboard' text='Dashboard' />
      <S.Divider>
        <Divider />
      </S.Divider>
      <MenuItem icon='product' text='Products' />
      <MenuItem icon='event' text='Events' />
      <MenuItem icon='user' text='Users' />
      <S.Divider>
        <Divider />
      </S.Divider>
      <MenuItem icon='sales' text='Sales' />
      <MenuItem icon='discount' text='Discounts' />
      <MenuItem icon='payments' text='Payments' />
      <S.Divider>
        <Divider />
      </S.Divider>
      <MenuItem icon='messages' text='Messages' badge={10} />
      <MenuItem icon='settings' text='Settings' />
      <S.Footer>
        <S.Avatar src='https://avatars.dicebear.com/api/bottts/:seed.svg' />
        <S.FooterBox>
          <S.Name>Kevin Gomes</S.Name>
          <S.Email>kevingomes@knsolucoes.com.br</S.Email>
        </S.FooterBox>
        <S.Icon>
          <Icons icon='menu' size={22} weight={'light'} />
        </S.Icon>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Sidebar
