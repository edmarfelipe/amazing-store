import React from 'react'
import SideMenu from './index'

export default {
  title: 'SideMenu',
  component: SideMenu,
}

export function Default() {
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

  return (
    <SideMenu categories={categories} />
  )
}
