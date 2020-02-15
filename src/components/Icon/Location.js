import React from 'react'
import PropTypes from 'prop-types'

export default function Location({ color, width }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 9 13"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={color} fillRule="evenodd" stroke="none" d="M0 4C0 1.94305 2.01942 0 5 0C6.98058 0 9 1.94305 9 4C9 7.05652 6.68623 10.4291 5.5772 12.0457C5.20777 12.5842 4.97203 12.9278 5 13C4.82967 12.9833 4.7267 12.9821 4.71779 12.9856C4.70889 12.9892 4.79405 12.9975 5 13C4.76646 13 4.61442 12.9946 4.49381 12.9903C4.31457 12.9839 4.20475 12.98 4 13C4.02812 12.93 3.7982 12.5989 3.43603 12.0773C2.33224 10.4878 0 7.12918 0 4ZM3 5C3 5.32949 3.67213 6 5 6C5.32787 6 6 5.32949 6 5C6 3.67218 5.32787 3 5 3C3.67213 3 3 3.67218 3 5Z" />
    </svg>
  )
}

Location.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}
