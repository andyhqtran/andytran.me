import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledIconButton } from './IconButton.styles'

const IconButton = ({
  children,
  className,
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

IconButton.propTypes = {
  children: PropTypes.oneOf([
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

export default IconButton
