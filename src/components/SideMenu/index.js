import React from 'react'
import {
  Container, Title, Category, Items, Item,
} from './styles'

const SideMenu = () => (
  <Container>
    <Category>
      <Title>FACE</Title>
      <Items>
        <Item isActive>creams</Item>
        <Item>Toners</Item>
        <Item>Masks</Item>
      </Items>

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
