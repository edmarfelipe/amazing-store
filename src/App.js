import React from 'react'
import GlobalStyle from './styles/global'
import Archive from './pages/Archive'
import SideMenu from './components/SideMenu'
import Header from './components/Header'

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

export default function App() {
  const menuItems = [
    'Shipping',
    'Blog',
    'Company',
    'My account',
  ]

  return (
    <>
      <GlobalStyle />
      <Header title="Amazing store" cityName="Capitão Andrade" tel="8 800 505-04-83" menuItems={menuItems} />
      <Archive />
      <SideMenu categories={categories} />
    </>
  )
}
