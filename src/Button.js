import React from 'react'
import PropTypes from 'prop-types'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

const Button = ({label}) => {
  return (
    <button>{label}</button>
  )
}

Button.propTypes = {
 label: PropTypes.string
}

Button.defaultProps = {
  label: 'Button'
}

export default Button