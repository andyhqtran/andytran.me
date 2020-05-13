import { pick } from '@styled-system/props'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledParagraph } from './Paragraph.styles'

export const Paragraph = ({ children, className, ...restOfProps }) => {
  return (
    <StyledParagraph
      className={className}
      {...pick(restOfProps)}
    >
      {children}
    </StyledParagraph>
  )
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography
}

export default Paragraph
