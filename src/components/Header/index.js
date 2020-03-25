import React from 'react'
import PropTypes from 'prop-types'
import MyCartButton from '../MyCartButton'

import {
  Container, Wraper, Title, City, Tel, Menu, MenuItem, CityName,
} from './styles'

import Icon from '../Icon'

export default function Header({
  title, cityName, tel, menuItems,
}) {
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
        <MyCartButton value="15" name="MY CART" gridColumn="4" />
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
