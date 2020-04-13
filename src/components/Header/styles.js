import styled from 'styled-components'

import Variables from 'styles/variables'

export const Container = styled.div`
  background:  ${Variables.primaryColor};
  border-top: 4px solid ${Variables.secondaryColor};
`

export const Wraper = styled.div`
  align-items: center;
  color: ${Variables.textColor};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 1fr;
  height: 100%;
  margin: 0 auto;
  max-width: 1180px;
  padding: 10px 0;
`

export const Title = styled.span`
  color: ${Variables.backgroundColor};
  font-family: ${Variables.fontFamilyBold};
  font-size: ${Variables.fontSizes.lg};
  font-weight: 500;
  grid-area: 1;
  grid-column: span 3;
  margin-left: 24px;
  padding: 20px 0;
`

export const City = styled.span`
  font-size: ${Variables.fontSizes.md};
  grid-area: 1;
  grid-column-end: 7;
  grid-column-start: 4;

  svg {
    margin-right: 11px;
    margin-top: 4px;
  }
`

export const CityName = styled.span`
  color: ${Variables.secondaryColor};
  font-family: ${Variables.fontFamilyBold};
  margin-left: 3px;
`

export const Tel = styled.a`
  color: ${Variables.textColor};
  font-size: ${Variables.fontSizes.md};
  grid-area: 1;
  grid-column-end: 9;
  grid-column-start: 7;
  text-decoration: none;

  &:hover {
    color: ${Variables.secondaryColor};
  }

  svg {
    margin-right: 6px;
    margin-top: 4px;
  }
`

export const Menu = styled.ul`
  grid-area: 1;
  grid-column-end: 13;
  grid-column-start: 9;
  justify-self: end;
  list-style: none;
`

export const MenuItem = styled.li`
  cursor: pointer;
  display: inline;
  font-size: ${Variables.fontSizes.md};
  padding: 9px;

  &:hover {
    color: ${Variables.secondaryColor};
  }

  &:last-child {
    padding-left: 16px;
  }
`

export const CardHeader = styled.div`
  align-items: flex-end;
  background: ${Variables.colors.secondary.w500};
  display: grid;
  grid-template-columns: 20% 70% 10%;
  height: 100%;
  justify-self: center;
  padding: 15px;
  width: 100%;
`
export const Body = styled.div`
  background: ${Variables.whiteColor};
  height: 100%;
  padding: 25px;
  width: 100%;
`

export const Footer = styled.div`
  background: ${Variables.colors.primary.w500};
  height: 100%;
  width: 100%;
`

export const CardTitle = styled.h3`
  color: ${Variables.colors.text.w000};
  font-size: ${Variables.fontSizes.lg};
  font-weight: 600;
`
