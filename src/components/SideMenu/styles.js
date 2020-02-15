/* eslint-disable no-confusing-arrow */
import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  background: ${variables.backgroundColor};
  border-radius: 3px;
  box-shadow: 0px 10px 70px rgba( 121, 121, 121, 0.1);
  height: auto;
  padding: 10px;
  width: 285px;
`

export const Title = styled.h2`
  color: ${variables.tertiaryColor};
  font-size: ${variables.fontSizes.base};
  height: 20px;
  line-height: ${variables.lineHeight};
`

export const Category = styled.h2`
  font-size: ${variables.fontSizes.base};
  margin-top: 10px;
`

export const Item = styled.p`
  color: ${(props) => props.isActive ? variables.primaryColor : variables.quaternaryColor};
  font-size: ${variables.fontSizes.base};
  line-height: ${variables.lineHeight};
  margin-top: 10px;
`
