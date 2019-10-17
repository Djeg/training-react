import styled, { createGlobalStyle } from 'styled-components'

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
`

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
    min-width: 30px;
`
