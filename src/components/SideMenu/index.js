import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Container, MainTitle, Title, Category, Items, Item,
} from './styles'

export default function SideMenu({ categories }) {
  const [activeCategory, setActiveCategory] = useState(1)

  function showCategory(categoryId) {
    if (categoryId === activeCategory) {
      setActiveCategory(0)
      return
    }
    setActiveCategory(categoryId)
  }

  const listItems = categories.map((category) => (
    <Category key={category.id.toString()}>
      <Title onClick={() => showCategory(category.id)}>{category.title}</Title>
      {
        activeCategory === category.id && (
          <Items>
            {category.items.map((item) => <Item key={item.id}>{item.title}</Item>)}
          </Items>
        )
      }
    </Category>
  ))

  return (
    <>
      <Container>
        <MainTitle>All Categories</MainTitle>
        {listItems}
      </Container>
    </>
  )
}

SideMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}
