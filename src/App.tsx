import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PrimaryTheme } from './Styles/Themes'
import { GlobalStyle } from './Styles/GlobalStyle'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <GlobalStyle />
      <RecoilRoot>
        <div>Entry point</div>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App
