import styled, { keyframes } from 'styled-components'
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

export const Title = styled.div`
  color: ${variables.tertiaryColor};
  cursor: pointer;
  font-size: ${variables.fontSize};
  height: 20px;
  line-height: ${variables.lineHeight};
`
const appear = keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`

export const Items = styled.ul`
  animation: ${appear} 200ms ease;
  list-style: none;
`

export const Item = styled.li`
  color: ${(props) => (props.isActive ? variables.primaryColor : variables.quaternaryColor)};
  cursor: pointer;
  font-size: ${variables.fontSizes.base};
  line-height: ${variables.lineHeight};
  margin-top: 10px;
`
