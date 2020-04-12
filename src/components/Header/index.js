import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import MyCartButton from '../MyCartButton'
import Search from '../Search'

import {
  Container, Wraper, Title, City, Tel, Menu, MenuItem, CityName,
} from './styles'

import Icon from '../Icon'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
          Oi
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
