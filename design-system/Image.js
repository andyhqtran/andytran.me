import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledImage } from './Image.styles'

export const Image = ({
  alt,
  className,
  src,
  srcSet,
  title,
  ...restOfProps
}) => {
  return (
    <StyledImage
      alt={alt}
      className={className}
      src={src}
      srcSet={srcSet}
      title={title}
      {...pick(restOfProps)}
    />
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  title: PropTypes.string,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space
}
