import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { theme, GlobalStyle } from '../../theme'
import Main from './Main'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <Main />
          <GlobalStyle />
        </>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
