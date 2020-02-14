import React from 'react'
import GlobalStyle from './styles/global'
import Card from './components/Card'
import Archive from './pages/Archive'
import SideMenu from './components/SideMenu'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Archive />
      <SideMenu />
      <Card />
    </>
  )
}
