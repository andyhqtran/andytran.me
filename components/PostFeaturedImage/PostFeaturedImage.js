import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { Card } from 'components/Card'
import { Image } from 'components/Image'
import { Window } from 'components/Window'

const PostFeaturedImage = ({ className, image, title, ...restOfProps }) => {
  return (
    <Card
      maxWidth={1184}
      mt={16}
      mx='auto'
      pl={14}
      pr={14}
      pt={14}
      overflow='hidden'
      {...pick(restOfProps)}
    >
      <Window borderBottomLeftRadius={0} borderBottomRightRadius={0}>
        <Image title={title} src={image} width='100%' />
      </Window>
    </Card>
  )
}

PostFeaturedImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  ...propTypes.background,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space
}

export default PostFeaturedImage
