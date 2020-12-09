import React from 'react'
import Head from 'next/head'
import Header from 'components/layout/Header'
import { archiveReducer } from 'components/pages/Archive/reducer'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import GlobalStyle from 'styles/global'

const store = createStore(
  combineReducers({
    archiveReducer,
  }),
)

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const menuItems = ['Shipping', 'Blog', 'Company', 'My account']

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Home </title>
      </Head>
      <Header
        title="Amazing store"
        cityName="Capitão Andrade"
        tel="8 800 505-04-83"
        menuItems={menuItems}
      />

      <Provider store={store}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
