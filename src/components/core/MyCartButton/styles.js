import styled from 'styled-components'
import variables from 'styles/variables'

export const Container = styled.div`
  align-items: center;
  background: ${variables.secondaryColor};
  border-radius: 5px;
  cursor: pointer;
  display: grid;
  grid-column-end: 13;
  grid-column-start: 11;
  grid-template-columns: 25% 50% 25%;
  height: 50px;
  justify-items: center;
  justify-self: end;
  width: 90%;
`

export const Value = styled.p`
  align-items: center;
  background: ${variables.quinaryColor};
  border-radius: 0px 5px 5px 0px;
  color: ${variables.colors.text.w000};
  display: grid;
  height: 100%;
  text-align: center;
  width: 100%;
`
export const Lightbox = styled.div`
background: ${variables.translucid};
bottom: 0;
left: 0;
opacity: ${({ show }) => (show ? 1 : 0)};
overflow: scroll;
pointer-events: ${({ show }) => (show ? 'inherit' : 'none')};
position: fixed;
right: 0;
top: 0;
transition: opacity 400ms ease-in;
z-index: ${variables.zIndex.lvThree};
`
export const Card = styled.div`
  display: grid;
  grid-template-rows: 20% 70% 10%;
  height: 100vh;
  margin: 0 0 0 auto;
  width: 30vw;
`
export const Header = styled.div`
  align-items: flex-end;
  background: ${variables.colors.secondary.w500};
  display: grid;
  grid-template-columns: 20% 70% 10%;
  height: 100%;
  justify-self: center;
  padding: 15px;
  width: 100%;
`
export const Body = styled.div`
  background: ${variables.whiteColor};
  height: 100%;
  width: 100%;
`

export const Footer = styled.div`
  background: ${variables.colors.primary.w500};
  height: 100%;
  width: 100%;
`

export const Title = styled.h3`
  color: ${variables.colors.text.w000};
  font-weight: 400;
`
