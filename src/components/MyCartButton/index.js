import React, { useState } from 'react'
import PropTypes from 'prop-types'
import variables from 'styles/variables'
import {
  Container, Value, Lightbox, Card, Header, Body, Footer, Close,
} from './styles'
import Icon from '../Icon'

export default function MyCartButton({ name, value, gridColumn }) {
  const [doShow, setDoshow] = useState(false)

  function handleClick() {
    setDoshow(!doShow)
  }

  return (
    <>
      <Lightbox show={doShow}>
        <Card>
          <Header>
            <Close onClick={handleClick}> x </Close>
          </Header>
          <Body />
          <Footer />
        </Card>
      </Lightbox>

      <Container gridColumn={gridColumn} onClick={handleClick}>
        <Icon name="shopping-car" width={25} color={variables.whiteColor} />
        <p>{name}</p>
        <Value>{value}</Value>
      </Container>
    </>
  )
}

MyCartButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  gridColumn: PropTypes.string.isRequired,
}
