import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'sanitize.css/sanitize.css'

import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import reportWebVitals from 'reportWebVitals'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import { Application } from './app/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <HelmetProvider>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </HelmetProvider>
)

serviceWorkerRegistration.register()
reportWebVitals()
