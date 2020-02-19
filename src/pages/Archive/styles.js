import styled from 'styled-components'

export const Container = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  margin: 15px 0;
`
