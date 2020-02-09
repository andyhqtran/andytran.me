import { rem } from 'polished'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #110F0D;
    color: #FFFFFF;
    font-family: Inter, sans-serif;
    font-size: ${rem(18)};
    letter-spacing: ${rem(-0.2)};
    line-height: ${rem(28)};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
