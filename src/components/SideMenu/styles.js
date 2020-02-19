/* eslint-disable no-confusing-arrow */
import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.ul`
  background: ${variables.backgroundColor};
  border-radius: 3px;
  box-shadow: 0px 10px 70px rgba( 121, 121, 121, 0.1);
  height: auto;
  padding: 10px;
  width: 285px;
`
export const Category = styled.li`
  font-size: ${variables.fontSize};
  margin-top: 10px;
`

export const Title = styled.h2`
  color: ${variables.tertiaryColor};
  font-size: ${variables.fontSize};
  height: 20px;
  line-height: ${variables.lineHeight};
`

export const Items = styled.ul`
  display: grid
`

export const Item = styled.li`
  color: ${(props) => props.isActive ? variables.primaryColor : variables.quaternaryColor};
  font-size: ${variables.fontSize};
  line-height: ${variables.lineHeight};
  margin-top: 10px;
`
