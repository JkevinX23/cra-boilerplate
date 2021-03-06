import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/global-styles'
import theme from '../src/styles/theme'

export const decorators = [
  (Story) => (
  <ThemeProvider theme={theme}>
    <Story/>
    <GlobalStyle />
  </ThemeProvider>
  )
]

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

