import styled from 'styled-components'
import Variables from 'styles/variables'

export const Container = styled.li`
  align-items: center;
  background-color: ${Variables.backgroundColor};
  border-radius: 3px;
  box-shadow: 0px 10px 70px rgba( 121, 121, 121, 0.1);
  display: flex;
  flex-direction: column;
  height: 354px;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  width: 100%;
  z-index: ${Variables.zIndex.lvOne};

  &:hover button {
    flex: 0.4;
    opacity: 1;
  }
`

export const Button = styled.button`
  background: ${Variables.secondaryColor};
  border: none;
  box-sizing: border-box;
  color: ${Variables.backgroundColor};
  cursor: pointer;
  display: block;
  flex: 0;
  opacity:0;
  transition: 300ms;
  width: 100%;
`

export const Image = styled.img`
  height: auto;
  margin-top: 25px;
  max-width: 80%;
`

export const Title = styled.span`
  display: block;
  padding: 10px;
`

export const Value = styled.span`
  color: ${Variables.primaryColor};
  display: block;
`
