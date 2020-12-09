import React from 'react'
import PropTypes from 'prop-types'

export default function Arrow({ color, width }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 8 13"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        stroke={color}
        fill="none"
        d="M10 0L5 5L0 0"
        transform="matrix(4.371139E-08 -1 -1 -4.371139E-08 6.5 11.5)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Arrow.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}
