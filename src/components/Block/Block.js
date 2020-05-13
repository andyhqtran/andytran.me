import { pick } from '@styled-system/props'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React from 'react'

import { motionPick } from 'utils/motion-props'
import { StyledBlock } from './Block.styles'

const Block = ({ children, className, ...restOfProps }) => {
  return (
    <StyledBlock
      className={className}
      {...motionPick(restOfProps)}
      {...pick(restOfProps)}
    >
      {children}
    </StyledBlock>
  )
}

Block.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography
}

export default Block
