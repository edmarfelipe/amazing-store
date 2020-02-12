import { createGlobalStyle } from 'styled-components'

import Variables from './variables'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${Variables.fontFamily};
    font-size: ${Variables.fontSize};
    font-weight: 300;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-display: swap;
    font-family: ${Variables.fontFamilyBold};
    src: url('../assets/fonts/CircularStd-Bold.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${Variables.fontFamily};
    src: url('../assets/fonts/CircularStd-Book.woff2') format('woff2');
  }
`
