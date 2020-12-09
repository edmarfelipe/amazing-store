import React from 'react'

import Card from 'components/core/Card'
import SideMenu from 'components/layout/SideMenu'
import SubHeader from 'components/layout/SubHeader'
import { Container, Grid } from './styles'

const categories = [
  {
    id: 1,
    title: 'Face',
    items: [
      { id: 1, title: 'Creams & gels' },
      { id: 2, title: 'Patches' },
      { id: 3, title: 'Emulsions' },
      { id: 4, title: 'Toners' },
      { id: 5, title: 'Face cleansing' },
      { id: 6, title: 'Make up removal' },
      { id: 7, title: 'Scrubs' },
      { id: 8, title: 'Peeling' },
      { id: 9, title: 'Masks' },
    ],
  },
  {
    id: 2,
    title: 'Body',
    items: [],
  },
  {
    id: 3,
    title: 'Foot',
    items: [],
  },
  {
    id: 4,
    title: 'Hands',
    items: [],
  },
  {
    id: 5,
    title: 'Hair',
    items: [],
  },
  {
    id: 6,
    title: 'Makeup',
    items: [],
  },
]

const products = [
  {
    title: 'Missha All Around Safe Block Sebum Zero Sun',
    imageUrl: './assets/imgs/product-1.png',
    imageAlt: 'Block Sebum Zero Sun',
    price: '4.00',
  },
  {
    title: 'Innisfree Green Tea Balancing Cream',
    imageUrl: './assets/imgs/product-2.png',
    imageAlt: 'Green Tea',
    price: '18.00',
  },
  {
    title: 'Claire’s Cloud 9 Blanc De Whitening Cream',
    imageUrl: './assets/imgs/product-3.png',
    imageAlt: 'Whitening Cream',
    price: '4.00',
  },
  {
    title: 'Missha All Around Safe Block Sebum Zero Sun',
    imageUrl: './assets/imgs/product-1.png',
    imageAlt: 'Block Sebum Zero Sun',
    price: '4.00',
  },
  {
    title: 'Innisfree Green Tea Balancing Cream',
    imageUrl: './assets/imgs/product-2.png',
    imageAlt: 'Green Tea',
    price: '18.00',
  },
  {
    title: 'Claire’s Cloud 9 Blanc De Whitening Cream',
    imageUrl: './assets/imgs/product-3.png',
    imageAlt: 'Whitening Cream',
    price: '4.00',
  },
  {
    title: 'Innisfree Green Tea Balancing Cream',
    imageUrl: './assets/imgs/product-2.png',
    imageAlt: 'Green Tea',
    price: '18.00',
  },
  {
    title: 'Claire’s Cloud 9 Blanc De Whitening Cream',
    imageUrl: './assets/imgs/product-3.png',
    imageAlt: 'Whitening Cream',
    price: '4.00',
  },
]

export default function Archive() {
  return (
    <Grid>
      <SideMenu categories={categories} />
      <SubHeader />
      <Container>
        {
          products.map((item) => (
            <Card
              title={item.title}
              imageUrl={item.imageUrl}
              imageAlt={item.imageAlt}
              price={item.price}
            />
          ))
        }
      </Container>
    </Grid>
  )
}
