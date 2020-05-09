import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledLogo } from './Logo.styles'

const Logo = ({ className, title, ...restOfProps }) => {
  const initials = title && title.replace(/[^a-zA-Z- ]/g, '').match(/\b\w/g)

  return (
    <StyledLogo
      className={className}
      {...pick(restOfProps)}
    >
      {initials}
    </StyledLogo>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  ...propTypes.background,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space
}

export default Logo
