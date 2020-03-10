import styled from 'styled-components'
import variables from 'styles/variables'

export const Container = styled.div`
  align-items: center;
  color: ${variables.whiteColor};
  display: grid;
  grid-template-columns: 75% 25%;
  height: 100%;
  text-align: center;
  width: 100%;
`
export const Name = styled.p`
 background: ${variables.secondaryColor};
 border-bottom-left-radius: 3px;
 border-top-left-radius: 3px;
 display: grid;
 justify-content: center;
 padding: 10px 20px;
`

export const Value = styled.p`
background: ${variables.quinaryColor};
border-bottom-right-radius: 3px;
border-top-right-radius: 3px;
display: grid;
justify-content: center;
padding: 10px 20px;
`
