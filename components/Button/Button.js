import PropTypes from 'prop-types'
import React from 'react'

import { StyledButton } from './Button.styles'

const Button = ({ children, ...restOfProps }) => {
  return (
    <StyledButton {...restOfProps}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Button
