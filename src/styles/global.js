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
  }
`
