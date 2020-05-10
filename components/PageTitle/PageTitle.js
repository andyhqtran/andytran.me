import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { Block } from 'components/Block'
import { Heading } from 'components/Heading'
import { Paragraph } from 'components/Paragraph'

const PageTitle = ({
  className,
  description,
  title,
  ...restOfProps
}) => {
  return (
    <Block
      className={className}
      {...pick(restOfProps)}
    >
      <Heading mb={4} variant='h1'>
        {title}
      </Heading>
      <Paragraph color='description' fontSize={4} lineHeight={5}>
        {description}
      </Paragraph>
    </Block>
  )
}

PageTitle.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
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

export default PageTitle
