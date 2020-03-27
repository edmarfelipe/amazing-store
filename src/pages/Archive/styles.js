import styled from 'styled-components'
import Variables from 'styles/variables'

export const Container = styled.ul`
  display: grid;
  grid-column: 2;
  grid-gap: 28px;
  grid-template-columns: repeat(4, 1fr);
  z-index: ${Variables.zIndex.lvTwo};
`

export const Grid = styled.div`
  column-gap: 20px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 0 auto;
  max-width: 1180px;
`
