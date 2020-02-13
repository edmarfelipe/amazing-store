import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  background: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 10px 70px rgba( 121, 121, 121, 0.1);
  height: auto;
  padding: 10px;
  width: 285px;
`

export const Title = styled.h2`
  font-size: ${variables.fontSize};
`

export const Category = styled.h2`
  font-size: ${variables.fontSize};
`
export const Item = styled.p`
  color: ${variables.color};
  font-size: ${variables.fontSize};
`
