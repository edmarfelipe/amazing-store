import React from 'react'
import PropTypes from 'prop-types'

export default function ShoppingCar({ color, width }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path d="M0.820513 1.6C1.27367 1.6 1.64103 1.24183 1.64103 0.8C1.64103 0.358172 1.27367 0 0.820513 0C0.367356 0 0 0.358172 0 0.8C0 1.24183 0.367356 1.6 0.820513 1.6Z" transform="translate(6.15387 12.3999)" id="path_1" />
        <path d="M0.820513 1.6C1.27367 1.6 1.64103 1.24183 1.64103 0.8C1.64103 0.358172 1.27367 0 0.820513 0C0.367356 0 0 0.358172 0 0.8C0 1.24183 0.367356 1.6 0.820513 1.6Z" transform="translate(11.0769 12.3999)" id="path_2" />
      </defs>
      <g id="Group-3" transform="translate(2 2)">
        <path d="M0 0L2.05128 0L4.92308 8.8L13.9487 8.8L16 2.4L2.87179 2.4" id="Path-367" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <g id="Oval-43">
          <use xlinkHref="#path_1" fill="none" stroke={color} strokeWidth="4" />
          <use stroke="none" fill={color} fillOpacity="0" xlinkHref="#path_1" />
        </g>
        <g id="Oval-43">
          <use xlinkHref="#path_2" fill="none" stroke={color} strokeWidth="4" />
          <use stroke="none" fill={color} fillOpacity="0" xlinkHref="#path_2" />
        </g>
      </g>
    </svg>
  )
}

ShoppingCar.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}
