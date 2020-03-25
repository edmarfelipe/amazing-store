import styled from 'styled-components'
import variables from 'styles/variables'

export const Container = styled.div`
  align-items: center;
  background: ${variables.secondaryColor};
  border-radius: 5px;
  color: ${variables.whiteColor};
  display: grid;
  grid-column-start: ${({ gridColumn }) => (gridColumn || 1)};
  grid-template-columns: 25% 50% 25%;
  height: 50px;
  justify-items: center;
  justify-self: end;
  width: 60%;
`

export const Value = styled.p`
  align-items: center;
  background: ${variables.quinaryColor};
  border-radius: 0px 5px 5px 0px;
  display: grid;
  height: 100%;
  text-align: center;
  width: 100%;
`
