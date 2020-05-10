import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

import { Image } from 'components/Image'
import { motionPick } from 'utils/motion-props'
import { StyledTag } from './Tag.styles'

const Tag = ({
  className,
  description,
  image,
  slug,
  title,
  ...restOfProps
}) => {
  return (
    <Link
      as={`/tag/${slug}`}
      passHref
      href='/tag/[slug]'
    >
      <StyledTag
        className={className}
        whileTap={{ scale: 0.92 }}
        {...motionPick(restOfProps)}
        {...pick(restOfProps)}
      >
        <Image
          alt={description}
          src={image}
          title={title}
        />
      </StyledTag>
    </Link>
  )
}

Tag.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  ...propTypes.background,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space
}

export default Tag
