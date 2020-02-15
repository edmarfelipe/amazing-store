import React from 'react'

import { Container } from './styles'

import Card from '../../components/Card'

export default function Archive() {
  return (
    <Container>
      <Card
        title="Missha All Around Safe Block Sebum Zero Sun"
        imageUrl="./assets/imgs/product-1.png"
        imageAlt=""
        price="4.00"
      />
      <Card
        title="Innisfree Green Tea Balancing Cream"
        imageUrl="./assets/imgs/product-2.png"
        imageAlt=""
        price="18.00"
      />
      <Card
        title="Claire’s Cloud 9 Blanc De Whitening Cream"
        imageUrl="./assets/imgs/product-3.png"
        imageAlt=""
        price="4.00"
      />
    </Container>
  )
}
