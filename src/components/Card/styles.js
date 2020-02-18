import styled from 'styled-components'
import Variables from '../../styles/variables'

export const Container = styled.li`
  background-color: ${Variables.backgroundColor};
  border-radius: 3px;
  box-shadow: 0px 10px 70px rgba( 121, 121, 121, 0.1);
  height: auto;
  list-style: none;
  padding: 10px;
  text-align: center;
  width: 100%;
`

export const Button = styled.button`
  background: ${Variables.secondaryColor};
  border: none;
  box-sizing: border-box;
  color: ${Variables.backgroundColor};
  cursor: pointer;
  display: block;
  font-family: 'Raleway', sans-serif;
  height: 50px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: 1s;
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
