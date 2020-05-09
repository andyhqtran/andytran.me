import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledIconBase } from './IconBase.styles'

const IconBase = ({ children, className, ...restOfProps }) => {
  return (
    <StyledIconBase
      className={className}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...pick(restOfProps)}
    >
      {children}
    </StyledIconBase>
  )
}

IconBase.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  ...propTypes.background,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.space
}

export default IconBase
