import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.form`
  align-items: center;
  display: flex;
  grid-column-start: 3;
  position: relative;
`
export const Input = styled.input`
  border: none;
  border-radius: 3px;
  color: ${variables.textColor};
  font-size: ${variables.fontSizes.base};
  height: 50px;
  outline: none;
  padding: 10px 35px;
  width: 400px;
`
export const Image = styled.div`
  left: 10px;
  position: absolute;
`
