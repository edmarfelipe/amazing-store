import React from 'react'
import {
  Container, Title, Category, Item,
} from './styles'

const SideMenu = () => (
  <Container>
    <h2>All Categories</h2>
    <Category>
      <Title>Body</Title>
      <Item>creams</Item>
      <Item>Toners</Item>
      <Item>Masks</Item>
    </Category>
    <Category>
      <Title>Foot</Title>
    </Category>
    <Category>
      <Title>Hands</Title>
    </Category>
    <Category>
      <Title>Hair</Title>
    </Category>
  </Container>
)

export default SideMenu
