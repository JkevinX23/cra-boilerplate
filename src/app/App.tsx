import { Helmet } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'styles/global-styles'

import { AppRotues } from './routes'

export function Application() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate='%s - React Boilerplate'
        defaultTitle='React Boilerplate'
        htmlAttributes={{ lang: 'ptBr' }}
      >
        <meta name='description' content='Meu Boilerplate' />
      </Helmet>

      <AppRotues />

      <GlobalStyle />
    </BrowserRouter>
  )
}
