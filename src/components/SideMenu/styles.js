import styled, { keyframes } from 'styled-components'
import variables from 'styles/variables'

export const Container = styled.ul`
  background: ${variables.backgroundColor};
  border-radius: 3px;
  box-shadow: 0px 10px 70px rgba( 121, 121, 121, 0.1);
  height: auto;
  list-style: none;
  padding: 10px;
  width: 285px;
`

export const MainTitle = styled.p`
  color: ${variables.colors.text.w200};
  font-family: ${variables.fontFamilyBold};
  font-size: ${variables.fontSizes.xs};
  margin-bottom: 8px;
  text-transform: uppercase;
`

export const Category = styled.li`
  font-size: ${variables.fontSize};
  margin-top: 10px;
`

export const Title = styled.div`
  color: ${variables.colors.text.w900};
  cursor: pointer;
  font-family: ${variables.fontFamilyBold};
  font-size: ${variables.fontSize};
  height: 20px;
  line-height: 20px;
  text-transform: uppercase;
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
  animation: ${appear} 200ms ease-out;
  list-style: none;
`

export const Item = styled.li`
  color: ${(props) => (props.isActive ? variables.primaryColor : variables.colors.text.w200)};
  cursor: pointer;
  font-size: ${variables.fontSizes.base};
  line-height: 20px;
  margin-top: 10px;
`
