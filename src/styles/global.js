import { createGlobalStyle } from 'styled-components'

import variables from './variables'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${variables.fontFamily};
    font-size: ${variables.fontSizes.base};
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-display: swap;
    font-family: ${variables.fontFamilyBold};
    font-weight: 500;
    src: url('../assets/fonts/CircularStd-Bold.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${variables.fontFamily};
    font-weight: 400;
    src: url('../assets/fonts/CircularStd-Book.woff2') format('woff2');
  }
`
