import React from 'react'
import SideMenu from './index'

export default {
  title: 'SideMenu',
  component: SideMenu,
}

export function Default() {
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

  return (
    <SideMenu categories={categories} />
  )
}
