import React from 'react'
import {
  Container, GroupIcon, GroupTitle, Title,
} from './styles'

import Icon from '../Icon'

export default function Paginator() {
  return (
    <Container>
      <Title>Creams & gels</Title>
      <GroupIcon>
        <GroupTitle>Showing 60 of 392</GroupTitle>
        <Icon name="arrowleft" width={25} />
        <Icon name="arrowright" width={25} />
      </GroupIcon>
    </Container>
  )
}
