import React from 'react'
import PropTypes from 'prop-types'

import {
  Container, Image, Title, Value, Close,
} from './styles'

export default function Item({
  title, price, imageUrl, imageAlt,
}) {
  return (
    <Container>
      <Image alt={imageAlt} src={imageUrl} loading="lazy" />
      <Title>{title}</Title>
      <Value>{`$ ${price}`}</Value>
      <Close>X</Close>
    </Container>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
}
