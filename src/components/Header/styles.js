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
  grid-template-columns: 285px auto auto 340px;
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
  margin-left: 24px;
  margin-top: 13px;
`

export const City = styled.span`
  font-size: ${Variables.fontSizes.md};
  grid-area: 1;
  margin: 18px 0 0 30px;

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
  margin: 18px 0 0 68px;
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
  list-style: none;
  margin: 18px 0 0;
  padding: 9px 0 9px 9px;
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
