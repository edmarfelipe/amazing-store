import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import variables from 'styles/variables'
import {
  Container, Value, Lightbox, Card, Header, Body, Footer, Title,
} from './styles'
import Icon from '../Icon'

export default function MyCartButton({ name, value, gridColumn }) {
  const [doShow, setDoshow] = useState(false)
  const cardRef = useRef()

  function handleClick(e) {
    if (cardRef.current.contains(e.target)) {
      return
    }
    setDoshow(!doShow)
  }

  return (
    <>
      <Lightbox show={doShow} onClick={(e) => handleClick(e)}>
        <Card ref={cardRef}>
          <Header>
            <Icon name="shopping-car" width={25} color={variables.whiteColor} />
            <Title> MY CART </Title>
          </Header>
          <Body />
          <Footer />
        </Card>
      </Lightbox>

      <Container gridColumn={gridColumn} onClick={handleClick}>
        <Icon name="shopping-car" width={25} color={variables.whiteColor} />
        <Title>{name}</Title>
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
