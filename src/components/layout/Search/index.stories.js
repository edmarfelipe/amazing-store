import React from 'react'
import Search from './index'

export default {
  title: 'Search',
  component: Search,
}

export function Default() {
  return (
    <Search text="Search products by SKU or name" />
  )
}
