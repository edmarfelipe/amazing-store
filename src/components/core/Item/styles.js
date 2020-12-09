import styled from 'styled-components'
import Variables from 'styles/variables'

export const Container = styled.li`
  align-items: center;
  border: 0.5px solid ${Variables.quaternaryColor};
  border-radius: 3px;
  box-shadow: 0px 10px 70px rgba( 121, 121, 121, 0.1);
  display: grid;
  grid-template-columns: 1fr 5fr 1fr 1fr;
  list-style: none;
  margin: 13px 0;
  text-align: center;
  width: 90%;
  z-index: ${Variables.zIndex.lvOne};
`

export const Close = styled.p`
  cursor: pointer;
`

export const Image = styled.img`
  height: auto;
  padding: 10px;
  width: 90px;
`

export const Title = styled.span`
  display: block;
  padding: 10px;
`

export const Value = styled.span`
  color: ${Variables.primaryColor};
  display: block;
`
