import styled from 'styled-components'

import Variables from 'styles/variables'

export const Container = styled.div`
  border-bottom: 2px solid #E1E1E1;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 50px;
  margin: 50px 0;
`

export const Filters = styled.div`
  color: ${Variables.quaternaryColor};
  font-size: ${Variables.fontSizes.base};

  &:last-child {
    justify-self: end;
  }
`
export const FiltersName = styled.p`
  color: ${Variables.secondaryColor};
  display: inline-block;
  font-size: ${Variables.fontSizes.base};
  margin-left: 5px;
  text-transform: uppercase;
`

export const Paginator = styled.div`
  align-items: center;
  display: flex;
  text-transform: uppercase;
`

export const PaginatorTitle = styled.p`
  display: inline-block;
  font-size: ${Variables.fontSizes.base};
  margin-right: 10px;
`

export const Row = styled.div`
  align-items: center;
  background-color: ${Variables.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const RowFilters = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const Title = styled.p`
  font-family: ${Variables.fontFamily};
  font-size: ${Variables.fontSizes.lg};
`
