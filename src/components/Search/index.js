import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { Container, Text } from './styles'
import variables from '../../styles/variables'

export default function Search({ text }) {
  return (
    <Container color={variables.quaternaryColor}>
      <Icon name="search" color={variables.quaternaryColor} width={14} />
      <Text>{text}</Text>
    </Container>
  )
}

Search.propTypes = {
  text: PropTypes.string.isRequired,
}
