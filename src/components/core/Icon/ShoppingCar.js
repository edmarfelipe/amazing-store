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
        <path d="M.820513 1.6c.453157 0 .820517-.35817.820517-.8 0-.441828-.36736-.8-.820517-.8C.367356 0 0 .358172 0 .8c0 .44183.367356.8.820513.8z" transform="translate(6.153846 12.4)" id="a" />
        <path d="M.820513 1.6c.453157 0 .820517-.35817.820517-.8 0-.441828-.36736-.8-.820517-.8C.367356 0 0 .358172 0 .8c0 .44183.367356.8.820513.8z" transform="translate(11.07692 12.4)" id="b" />
      </defs>
      <path d="M2 2h2.05128l2.8718 8.8h9.02562L18 4.4H4.87179" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(2 2)">
        <use xlinkHref="#a" fill="none" stroke={color} strokeWidth="4" />
        <use fill={color} fillOpacity="0" xlinkHref="#a" />
      </g>
      <g transform="translate(2 2)">
        <use xlinkHref="#b" fill="none" stroke={color} strokeWidth="4" />
        <use fill={color} fillOpacity="0" xlinkHref="#b" />
      </g>
    </svg>
  )
}

ShoppingCar.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}
