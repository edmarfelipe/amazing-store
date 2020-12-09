import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import variables from '../../../styles/variables'
import MyCartButton from '../../core/MyCartButton'
import Search from '../Search'
import Item from '../../core/Item'

import {
  Container, Wraper, Title, City, Tel, Menu, MenuItem, CityName, CardHeader,
  CardTitle, Body, Footer,
} from './styles'

import Icon from '../../core/Icon'

const customStyles = {
  overlay: {
    'z-index': variables.zIndex.lvThree,
  },
  content: {
    'grid-template-rows': '20% 70% 10%',
    'margin-left': 'auto',
    border: 'none',
    display: 'grid',
    height: '100vh',
    margin: '0 0 0 auto',
    padding: 0,
    position: 'relative',
    top: 0,
    width: '30vw',
  },
}
export default function Header({
  title, cityName, tel, menuItems,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function changeModalState() {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <Container>
      <Wraper>
        <Title>{title}</Title>
        <City>
          <Icon name="location" width={12} />
          My city:
          <CityName>{cityName}</CityName>
        </City>
        <Tel href={`tel:${tel}`}>
          <Icon name="phone" width={15} />
          {tel}
        </Tel>
        {menuItems ? (
          <Menu>
            {
              menuItems.map((item) => (
                <MenuItem>{item}</MenuItem>
              ))
            }
          </Menu>
        ) : ''}
        <Search text="Search products by SKU or name" />
        <MyCartButton value="15" name="MY CART" gridColumn="4" handleOpenModal={changeModalState} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={changeModalState}
          style={customStyles}
        >
          <CardHeader>
            <Icon name="shopping-car" width={25} color={variables.whiteColor} />
            <CardTitle> MY CART </CardTitle>
          </CardHeader>
          <Body>
            <Item
              title="Missha All Around Safe Block Sebum Zero Sun"
              imageUrl="./assets/imgs/product-1.png"
              imageAlt="Block Sebum Zero Sun"
              price="4.00"
            />
            <Item
              title="Claire’s Cloud 9 Blanc De Whitening Cream"
              imageUrl="./assets/imgs/product-3.png"
              imageAlt="Whitening Cream"
              price="4.00"
            />
            <Item
              title="Missha All Around Safe Block Sebum Zero Sun"
              imageUrl="./assets/imgs/product-1.png"
              imageAlt="Block Sebum Zero Sun"
              price="4.00"
            />
          </Body>
          <Footer />
        </Modal>
      </Wraper>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
}
