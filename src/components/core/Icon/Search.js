import React from 'react'
import PropTypes from 'prop-types'

export default function Search({ color, width }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 18 19"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path d="M4.23782 8.67184C6.57831 8.67184 8.47565 6.73058 8.47565 4.33592C8.47565 1.94126 6.57831 0 4.23782 0C1.89734 0 0 1.94126 0 4.33592C0 6.73058 1.89734 8.67184 4.23782 8.67184Z" id="path_1" />
      </defs>

      <g transform="translate(3 3)">
        <g>
          <use xlinkHref="#path_1" fill="none" stroke={color} strokeWidth="6" />
          <use stroke="none" fill="#FFFFFF" fillOpacity="0" xlinkHref="#path_1" />
        </g>
        <path d="M0 0L3.99307 4.08551" transform="translate(7.764648 8.666748)" id="Line" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  )
}

Search.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}
