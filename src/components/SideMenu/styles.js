import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.ul`
  background: ${variables.backgroundColor};
  border-radius: 3px;
  box-shadow: 0px 10px 70px rgba( 121, 121, 121, 0.1);
  height: auto;
  list-style: none;
  padding: 10px;
  width: 285px;
`
export const Category = styled.li`
  font-size: ${variables.fontSize};
  margin-top: 10px;
`

export const Title = styled.h2`
  color: ${variables.tertiaryColor};
  cursor: pointer;
  font-size: ${variables.fontSizes.base};
  height: 20px;
  line-height: ${variables.lineHeight};
`

export const Items = styled.ul`
  display: grid;
  list-style: none;
`

export const Item = styled.li`
  color: ${(props) => (props.isActive ? variables.primaryColor : variables.quaternaryColor)};
  cursor: pointer;
  display: grid;
  font-size: ${variables.fontSizes.base};
  line-height: ${variables.lineHeight};
  margin-top: 10px;
`
