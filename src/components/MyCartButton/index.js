import React from 'react'
import PropTypes from 'prop-types'
import variables from 'styles/variables'
import { Container, Value, Title } from './styles'
import Icon from '../Icon'

export default function MyCartButton({
  name, value, gridColumn, handleOpenModal,
}) {
  return (
    <Container gridColumn={gridColumn} onClick={handleOpenModal}>
      <Icon name="shopping-car" width={25} color={variables.whiteColor} />
      <Title>{name}</Title>
      <Value>{value}</Value>
    </Container>
  )
}

MyCartButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  gridColumn: PropTypes.string.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
}
