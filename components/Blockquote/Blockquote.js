import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledBlockquote } from './Blockquote.styles'

const Blockquote = ({ className, children, ...restOfProps }) => {
  return (
    <StyledBlockquote
      className={className}
      {...pick(restOfProps)}
    >
      {children}
    </StyledBlockquote>
  )
}

Blockquote.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  ...propTypes.color,
  ...propTypes.space
}

export default Blockquote
