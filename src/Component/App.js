import React from 'react'
import {
  GlobalStyle,
  Header,
  MainContainer,
  MenuContainer,
} from './Ui/Layout'

export const App = () =>
  <>
    <GlobalStyle />
    <Header />
    <MenuContainer />
    <MainContainer>
      <h1>Hello World</h1>
    </MainContainer>
  </>
