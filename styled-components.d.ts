import 'styled-components'

import theme from './src/styles/theme'

// inferĂȘncia de tipos
type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
