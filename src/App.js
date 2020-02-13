import React from 'react'
import GlobalStyle from './styles/global'
import Card from './components/Card'
import Archive from './pages/Archive'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Archive />
      <Card />
    </>
  )
}
