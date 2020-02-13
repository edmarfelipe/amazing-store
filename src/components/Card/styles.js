import styled from 'styled-components'
import Variables from '../../styles/variables'

export const Container = styled.li`
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 10px 70px rgba( 121, 121, 121, 0.1);
  height: auto;
  list-style: none;
  padding: 10px;
  text-align: center;
  width: 100%;
`

export const Image = styled.img`
  height: auto;
  width: 100px;
`

export const Title = styled.span`
  display: block;
  padding: 10px;
`

export const Value = styled.span`
  color: ${Variables.primaryColor};
  display: block;
`
