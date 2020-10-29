import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PrimaryTheme } from './Styles/Themes'
import { GlobalStyle } from './Styles/GlobalStyle'
import { RecoilRoot } from 'recoil'
import { WelcomePage } from './Modules/WelcomePage'
import { UserForm } from './Modules/Creating/UserPage/UserForm'

function App() {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <GlobalStyle />
      <RecoilRoot>
        {/* <WelcomePage /> */}
        <UserForm />
        {/* <div>Entry point</div> */}
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App
