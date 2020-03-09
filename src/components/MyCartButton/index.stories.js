import React from 'react'
import MyCartButton from './index'

export default {
  title: 'MyCartButton',
  component: MyCartButton,
}

export function Default() {
  return (
    <MyCartButton btnValue="15" btnName="MY CART" />
  )
}
