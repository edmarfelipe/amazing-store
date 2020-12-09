import styled from 'styled-components'
import variables from '../../../styles/variables'

export const Container = styled.form`
  align-items: center;
  display: flex;
  grid-column-end: 11;
  grid-column-start: 4;
  grid-row: 2;
  justify-self: end;
  position: relative;
  width: 100%;
`
export const Input = styled.input`
  border: none;
  border-radius: 3px;
  color: ${variables.textColor};
  font-size: ${variables.fontSizes.base};
  height: 50px;
  outline: none;
  padding: 10px 40px;
  width: 100%;
`
export const Image = styled.div`
  left: 10px;
  position: absolute;
`
