import styled from 'styled-components'
import Variables from '../../styles/variables'

export const Container = styled.ul`
  display: grid;
  grid-gap: 28px;
  grid-template-columns: repeat(4, 1fr);
  z-index: ${Variables.zIndex.lvTwo};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  margin: 0 auto;
  max-width: 1180px;
`
