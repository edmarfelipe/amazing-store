import React from 'react'
import Card from './index'

export default {
  title: 'Card',
  component: Card,
}

export function Default() {
  return (
    <Card
      title="Missha All Around Safe Block Sebum Zero Sun"
      imageUrl="./assets/imgs/product-1.png"
      imageAlt="Block Sebum Zero Sun"
      price="4.00"
    />
  )
}
