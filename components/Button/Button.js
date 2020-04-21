import { pick } from '@styled-system/props'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledButton } from './Button.styles'

const Button = ({ children, className, onClick, type, ...restOfProps }) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      type={type}
      {...pick(restOfProps)}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  ...propTypes.background,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography
}

export default Button
