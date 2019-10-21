import React from 'react'
import { useSelector } from 'react-redux'
import {
  GlobalStyle,
  HeaderBox,
  MenuContainerBox,
  ToDoBox,
} from './Ui/Layout'
import { ToDos } from './Todo'

export const App = () => {
  const displayMenu = useSelector(state => state.menu.display)

  return (
    <>
      <GlobalStyle />
      <HeaderBox />
      { displayMenu ? <MenuContainerBox /> : null }
      <ToDoBox>
        <ToDos />
      </ToDoBox>
    </>
  )
}
