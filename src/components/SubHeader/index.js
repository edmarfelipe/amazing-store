import React from 'react'
import {
  Container, Filters, FiltersName, Paginator, PaginatorTitle, Row, RowFilters, Title,
} from './styles'

import Icon from '../Icon'

export default function SubHeader() {
  return (
    <Container>
      <Row>
        <Title>Creams & gels</Title>
        <Paginator>
          <PaginatorTitle>Showing 60 of 392</PaginatorTitle>
          <Icon name="arrowleft" width={25} />
          <Icon name="arrowright" width={25} />
        </Paginator>
      </Row>
      <RowFilters>
        <Filters>
          BRAND:
          <FiltersName>ALL BRANDS</FiltersName>
        </Filters>
        <Filters>
          SKIN TYPE:
          <FiltersName>FOR ONLY SKIN</FiltersName>
        </Filters>
        <Filters>
          AGE:
          <FiltersName>30+</FiltersName>
        </Filters>
        <Filters>
          SORT:
          <FiltersName>BY POPULARITY</FiltersName>
        </Filters>
      </RowFilters>
    </Container>
  )
}
