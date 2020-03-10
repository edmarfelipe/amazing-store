import React from 'react'
import {
  Container, Paginator, PaginatorTitle, Title,
} from './styles'

import Icon from '../Icon'

export default function SubHeader() {
  return (
    <Container>
      <Title>Creams & gels</Title>
      <Paginator>
        <PaginatorTitle>Showing 60 of 392</PaginatorTitle>
        <Icon name="arrowleft" width={25} />
        <Icon name="arrowright" width={25} />
      </Paginator>
    </Container>
  )
}
