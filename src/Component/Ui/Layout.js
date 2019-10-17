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
`
export const MainBlock = styled.div`
    margin-top: 40px;
    width: 100vw;
    height: 100vh;
`
