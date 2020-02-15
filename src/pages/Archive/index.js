import React from 'react'

import { Container } from './styles'

import Header from '../../components/Header'

export default function Archive() {
  const menuItems = [
    'Shipping',
    'Blog',
    'Company',
    'My account',
  ]

  return (
    <Container>
      <Header title="Amazing store" cityName="Los Angeles" tel="8 800 505-04-83" menuItems={menuItems} />
    </Container>
  )
}
