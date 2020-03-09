import React from 'react'
import PropTypes from 'prop-types'
import { Container, ButtonName, ButtonValue } from './styles'

export default function MyCartButton({ btnName, btnValue }) {
  return (
    <Container>
      <ButtonName>{btnName}</ButtonName>
      <ButtonValue>{btnValue}</ButtonValue>
    </Container>
  )
}

MyCartButton.propTypes = {
  btnName: PropTypes.string.isRequired,
  btnValue: PropTypes.string.isRequired,
}
