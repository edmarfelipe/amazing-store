import React from 'react'

import { Container, Grid } from './styles'

import Card from '../../components/Card'

import SideMenu from '../../components/SideMenu'

const categories = [
  {
    title: 'Sala',
    items: ['sofá', 'tv'],
  },
  {
    title: 'Quarto',
    items: ['cama', 'Guarda-roupas'],
  },
  {
    title: 'Cozinha',
    items: ['Geladeira', 'Fogão', 'Liquidificador'],
  },
]

export default function Archive() {
  return (
    <Grid>
      <SideMenu categories={categories} />
      <Container>
        <Card
          title="Missha All Around Safe Block Sebum Zero Sun"
          imageUrl="./assets/imgs/product-1.png"
          imageAlt="Block Sebum Zero Sun"
          price="4.00"
        />
        <Card
          title="Innisfree Green Tea Balancing Cream"
          imageUrl="./assets/imgs/product-2.png"
          imageAlt="Green Tea"
          price="18.00"
        />
        <Card
          title="Claire’s Cloud 9 Blanc De Whitening Cream"
          imageUrl="./assets/imgs/product-3.png"
          imageAlt="Whitening Cream"
          price="4.00"
        />
        <Card
          title="Missha All Around Safe Block Sebum Zero Sun"
          imageUrl="./assets/imgs/product-1.png"
          imageAlt="Block Sebum Zero Sun"
          price="4.00"
        />
        <Card
          title="Innisfree Green Tea Balancing Cream"
          imageUrl="./assets/imgs/product-2.png"
          imageAlt="Green Tea"
          price="18.00"
        />
        <Card
          title="Claire’s Cloud 9 Blanc De Whitening Cream"
          imageUrl="./assets/imgs/product-3.png"
          imageAlt="Whitening Cream"
          price="4.00"
        />
        <Card
          title="Innisfree Green Tea Balancing Cream"
          imageUrl="./assets/imgs/product-2.png"
          imageAlt="Green Tea"
          price="18.00"
        />
        <Card
          title="Claire’s Cloud 9 Blanc De Whitening Cream"
          imageUrl="./assets/imgs/product-3.png"
          imageAlt="Whitening Cream"
          price="4.00"
        />
      </Container>
    </Grid>
  )
}
