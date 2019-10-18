import React from 'react'
import {
  GlobalStyle,
  HeaderBox,
  MenuContainerBox,
  MainContainer,
} from './Ui/Layout'

export const App = () =>
  <>
    <GlobalStyle />
    <HeaderBox />
    <MenuContainerBox />
    <MainContainer>
      <h1>Hello World</h1>
    </MainContainer>
  </>
