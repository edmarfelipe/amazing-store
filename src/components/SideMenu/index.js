import React from 'react'
import {
  Container, Title, Category, Item,
} from './styles'

const SideMenu = () => (
  <Container>
    <Category>
      <Title>FACE</Title>
      <Item isActive>creams</Item>
      <Item>Toners</Item>
      <Item>Masks</Item>
    </Category>
    <Category>
      <Title>BODY</Title>
    </Category>
    <Category>
      <Title>FOOT</Title>
    </Category>
    <Category>
      <Title>HANDS</Title>
    </Category>
    <Category>
      <Title>HAIR</Title>
    </Category>
  </Container>
)

export default SideMenu
