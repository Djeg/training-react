import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from './../../State/Menu'

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`

export const Header = styled.div`
  background-color: blue;
  width: 100vw;
  min-height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

export const MenuButton = styled.button`
  width: 2em;
  height: 2em;
`

export const HeaderBox = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Header>
        <MenuButton onClick={() => dispatch(toggleMenu())} />
      </Header>
    </>
  )
}

export const MainContainer = styled.div`
  padding-top: 40px;
  padding-left: 30px;
  width: 100vw;
  height: 100vh;
`

export const MenuContainer = styled.div`
  background-color: red;
  position: fixed;
  left: 0;
  height: 100vh;
  min-width: ${props => props.open ? '100px' : '30px'} ;
`

export const MenuContainerBox = (props) => {
  const open = useSelector(state => state.menu.open)

  return (
  <>
    <MenuContainer open={open} />
  </>
  )
}
