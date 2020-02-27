import React from 'react'
import SideMenu from './index'

export default {
  title: 'SideMenu',
  component: SideMenu,
}

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


export function Default() {
  return (
    <SideMenu categories={categories} />
  )
}
