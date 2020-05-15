import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledLogo } from './Logo.styles'

export const Logo = ({ className, onClick, title, ...restOfProps }) => {
  const initials = title && title.replace(/[^a-zA-Z- ]/g, '').match(/\b\w/g)

  return (
    <StyledLogo
      className={className}
      onClick={onClick}
      {...pick(restOfProps)}
    >
      {initials}
    </StyledLogo>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.string,
  title: PropTypes.string,
  ...propTypes.background,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space
}
