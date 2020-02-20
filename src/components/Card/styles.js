import styled from 'styled-components'
import Variables from '../../styles/variables'

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
    opacity: 1;
    transform: translateY(0px);
    transition: opacity .5s;
  }
`

export const Button = styled.button`
  background: ${Variables.secondaryColor};
  border: none;
  box-sizing: border-box;
  color: ${Variables.backgroundColor};
  cursor: pointer;
  display: block;
  height: 50px;
  opacity: 0;
  transform: translateY(82px);
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
