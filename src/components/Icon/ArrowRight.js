import React from 'react'
import PropTypes from 'prop-types'

export default function ArrowRight({ color, width }) {
  return (
    <svg
      height={width}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 33"
      fill={color}
    >
      <path
        fill="none"
        d="M-1-1h582v402H-1z"
      />
      <g>
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="3" stroke="#464646" fill="none" d="M11.984 20.492L17 15.508l-4.984-5.016" />
      </g>
    </svg>

  )
}

ArrowRight.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}
