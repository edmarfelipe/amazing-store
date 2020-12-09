import React from 'react'
import PropTypes from 'prop-types'

import {
  Container, Image, Title, Value, Button,
} from './styles'

export default function Card({
  title, price, imageUrl, imageAlt,
}) {
  return (
    <Container>
      <Image alt={imageAlt} src={imageUrl} loading="lazy" />
      <Title>{title}</Title>
      <Value>{`$ ${price}`}</Value>
      <Button>ADD TO CART</Button>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
}
