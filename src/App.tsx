import { ThemeProvider } from '~/theme'

import React from 'react'
import Router from '~/router'

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App
