import React from 'react'
import GlobalStyle from './styles/global'
import Archive from './pages/Archive'
import SideMenu from './components/SideMenu'
import Header from './components/Header'

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
      <Header title="Amazing store" cityName="Los Angeles" tel="8 800 505-04-83" menuItems={menuItems} />
      <SideMenu />
      <Archive />
    </>
  )
}
