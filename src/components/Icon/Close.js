import React from 'react'
import PropTypes from 'prop-types'

export default function Close({ color, width }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path fill={color} stroke="none" d="M0.966681 6.10352e-05L24.8396 6.10352e-05Q24.9349 6.10352e-05 25.0282 0.0186367Q25.1216 0.0372124 25.2096 0.0736499Q25.2976 0.110087 25.3767 0.162986Q25.4559 0.215885 25.5232 0.283213Q25.5906 0.350541 25.6435 0.42971Q25.6964 0.508879 25.7328 0.596847Q25.7692 0.684815 25.7878 0.778201Q25.8064 0.871587 25.8064 0.966803L25.8064 0.968803Q25.8064 1.06402 25.7878 1.1574Q25.7692 1.25079 25.7328 1.33876Q25.6964 1.42673 25.6435 1.5059Q25.5906 1.58506 25.5232 1.65239Q25.4559 1.71972 25.3767 1.77262Q25.2976 1.82552 25.2096 1.86196Q25.1216 1.89839 25.0282 1.91697Q24.9349 1.93554 24.8396 1.93554L0.966681 1.93554Q0.871465 1.93554 0.778079 1.91697Q0.684693 1.89839 0.596725 1.86196Q0.508757 1.82552 0.429588 1.77262Q0.350419 1.71972 0.283091 1.65239Q0.215763 1.58506 0.162864 1.5059Q0.109965 1.42673 0.0735278 1.33876Q0.0370903 1.25079 0.0185146 1.1574Q-6.10351e-05 1.06402 -6.10352e-05 0.968803L-6.10352e-05 0.966803Q-6.10351e-05 0.871587 0.0185146 0.778201Q0.0370903 0.684815 0.0735278 0.596847Q0.109965 0.508879 0.162864 0.42971Q0.215763 0.350541 0.283091 0.283213Q0.350419 0.215885 0.429588 0.162986Q0.508757 0.110087 0.596725 0.0736499Q0.684693 0.0372124 0.778079 0.0186367Q0.871465 6.10352e-05 0.966681 6.10352e-05L0.966681 6.10352e-05Z" transform="matrix(0.7071068 -0.7071068 0.7071068 0.7071068 -9.036064E-05 18.24799)" />
        <path fill={color} stroke="none" d="M0.966803 6.10352e-05L24.8398 6.10352e-05Q24.935 6.10352e-05 25.0284 0.0186367Q25.1218 0.0372124 25.2097 0.0736499Q25.2977 0.110087 25.3769 0.162986Q25.456 0.215885 25.5234 0.283213Q25.5907 0.350541 25.6436 0.42971Q25.6965 0.508879 25.7329 0.596847Q25.7694 0.684815 25.7879 0.778201Q25.8065 0.871587 25.8065 0.966803L25.8065 0.968803Q25.8065 1.06402 25.7879 1.1574Q25.7694 1.25079 25.7329 1.33876Q25.6965 1.42673 25.6436 1.5059Q25.5907 1.58506 25.5234 1.65239Q25.456 1.71972 25.3769 1.77262Q25.2977 1.82552 25.2097 1.86196Q25.1218 1.89839 25.0284 1.91697Q24.935 1.93554 24.8398 1.93554L0.966803 1.93554Q0.871587 1.93554 0.778201 1.91697Q0.684815 1.89839 0.596847 1.86196Q0.508879 1.82552 0.42971 1.77262Q0.350541 1.71972 0.283213 1.65239Q0.215885 1.58506 0.162986 1.5059Q0.110087 1.42673 0.0736499 1.33876Q0.0372124 1.25079 0.0186367 1.1574Q6.10351e-05 1.06402 6.10352e-05 0.968803L6.10352e-05 0.966803Q6.10351e-05 0.871587 0.0186367 0.778201Q0.0372124 0.684815 0.0736499 0.596847Q0.110087 0.508879 0.162986 0.42971Q0.215885 0.350541 0.283213 0.283213Q0.350541 0.215885 0.42971 0.162986Q0.508879 0.110087 0.596847 0.0736499Q0.684815 0.0372124 0.778201 0.0186367Q0.871587 6.10352e-05 0.966803 6.10352e-05L0.966803 6.10352e-05Z" transform="matrix(0.7071068 0.7071068 -0.7071068 0.7071068 1.368498 6.29425E-05)" />
      </g>
    </svg>
  )
}

Close.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}
