import React from 'react'
import PropTypes from 'prop-types'
import { Container, Name, Value } from './styles'

export default function MyCartButton({ name, value, gridColumn }) {
  return (
    <Container gridColumn={gridColumn}>
      <Name>{name}</Name>
      <Value>{value}</Value>
    </Container>
  )
}

MyCartButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  gridColumn: PropTypes.string.isRequired,
}
