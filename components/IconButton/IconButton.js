import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledIconButton } from './IconButton.styles'

const IconButton = ({
  className,
  children,
  onClick,
  ...restOfProps
}) => {
  return (
    <StyledIconButton
      className={className}
      onClick={onClick}
      {...pick(restOfProps)}
    >
      {children}
    </StyledIconButton>
  )
}

export default IconButton
