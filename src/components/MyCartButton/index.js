import React from 'react'
import PropTypes from 'prop-types'
import variables from 'styles/variables'
import { Container, Value } from './styles'
import Icon from '../Icon'

export default function MyCartButton({ name, value, gridColumn }) {
  return (
    <Container gridColumn={gridColumn}>
      <Icon name="shopping-car" width={25} color={variables.whiteColor} />
      <p>{name}</p>
      <Value>{value}</Value>
    </Container>
  )
}

MyCartButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  gridColumn: PropTypes.string.isRequired,
}
