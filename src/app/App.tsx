import { Helmet } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global-styles'
import theme from 'styles/theme'

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
      <ThemeProvider theme={theme}>
        <AppRotues />

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
