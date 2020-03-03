import React from 'react'

import { Container, Grid } from './styles'
import Card from '../../components/Card'
import SideMenu from '../../components/SideMenu'
import Paginator from '../../components/Paginator'

const categories = [
  {
    id: '1',
    title: 'Sala',
    items: [{ id: 1, title: 'sofá' }, { id: 2, title: 'tv' }],
  },
  {
    id: '2',
    title: 'Quarto',
    items: [{ id: 1, title: 'cama' }, { id: 2, title: 'wardrobe' }],
  },
  {
    id: '3',
    title: 'Cozinha',
    items: [{ id: 1, title: 'geladeira' }, { id: 2, title: 'fogão' }],
  },
]

export default function Archive() {
  return (
    <Grid>
      <SideMenu categories={categories} />
      <Paginator />
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
