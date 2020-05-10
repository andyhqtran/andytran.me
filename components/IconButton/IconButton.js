import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { motionPick } from 'utils/motion-props'
import { StyledIconButton } from './IconButton.styles'

const IconButton = ({
  children,
  className,
  name,
  onClick,
  ...restOfProps
}) => {
  return (
    <StyledIconButton
      aria-label={name}
      className={className}
      onClick={onClick}
      whileTap={{ scale: 0.92 }}
      {...motionPick(restOfProps)}
      {...pick(restOfProps)}
    >
      {children}
    </StyledIconButton>
  )
}

IconButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  name: PropTypes.string,
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
