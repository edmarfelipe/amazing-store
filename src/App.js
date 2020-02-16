import React from 'react'
import GlobalStyle from './styles/global'
import Card from './components/Card'
import Archive from './pages/Archive'
import SideMenu from './components/SideMenu'

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

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Archive />
      <SideMenu categories={categories} />
      <Card />
    </>
  )
}
