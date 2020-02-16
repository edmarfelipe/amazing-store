/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Container, Title, Category, Items, Item,
} from './styles'

export default function SideMenu({ categories }) {
  const listItems = categories.map((category, categoryIndex) => (
    <Category key={categoryIndex}>
      <Title>{category.title}</Title>
      <Items>
        {
          category.items.map((item, itemIndex) => <Item key={itemIndex}>{item}</Item>)
        }
      </Items>
    </Category>
  ))
  return (
    <Container>{listItems}</Container>
  )
}

SideMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}
