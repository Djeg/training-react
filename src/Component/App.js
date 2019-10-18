import React from 'react'
import { useSelector } from 'react-redux'
import {
  GlobalStyle,
  HeaderBox,
  MenuContainerBox,
  MainContainer,
} from './Ui/Layout'

export const App = () => {
  const displayMenu = useSelector(state => state.menu.display)

  return (
    <>
      <GlobalStyle />
      <HeaderBox />
      { displayMenu ? <MenuContainerBox /> : null }
      <MainContainer>
        <h1>Hello World</h1>
      </MainContainer>
    </>
  )
}
