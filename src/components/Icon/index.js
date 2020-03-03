import React from 'react'
import PropTypes from 'prop-types'

import Arrow from './Arrow'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import Close from './Close'
import Location from './Location'
import Phone from './Phone'
import Search from './Search'
import ShoppingCar from './ShoppingCar'

export default function Icon({ name, color, width }) {
  switch (name) {
    case 'arrow':
      return <Arrow color={color} width={`${width}px`} />
    case 'arrowleft':
      return <ArrowLeft width={`${width}px`} />
    case 'arrowright':
      return <ArrowRight width={`${width}px`} />
    case 'close':
      return <Close color={color} width={`${width}px`} />
    case 'location':
      return <Location color={color} width={`${width}px`} />
    case 'phone':
      return <Phone color={color} width={`${width}px`} />
    case 'search':
      return <Search color={color} width={`${width}px`} />
    case 'shopping-car':
      return <ShoppingCar color={color} width={`${width}px`} />
    default:
      return <></>
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf(['arrow', 'arrowleft', 'arrowright', 'close', 'location', 'phone', 'search', 'shopping-car']).isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
}

Icon.defaultProps = {
  color: '#000',
  width: '100px',
}
