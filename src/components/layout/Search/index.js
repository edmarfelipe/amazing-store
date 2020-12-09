import React from 'react'
// import PropTypes from 'prop-types'
import Icon from '../../core/Icon'
import { Container, Input, Image } from './styles'
import variables from '../../../styles/variables'

export default function Search() {
  return (
    <Container>
      <Image>
        <Icon name="search" color={variables.quaternaryColor} width={25} />
      </Image>
      <Input placeholder="Search products by SKU or name" />
    </Container>
  )
}

Search.propTypes = {
  // text: PropTypes.string.isRequired,
}
