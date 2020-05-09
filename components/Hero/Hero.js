import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { Block } from 'components/Block'
import { Heading } from 'components/Heading'
import { Paragraph } from 'components/Paragraph'

const Hero = ({ description, title, ...restOfProps }) => {
  return (
    <Block px={14} py={16} {...pick(restOfProps)}>
      <Heading mb={4} variant='h1'>
        {title}
      </Heading>
      <Paragraph color='description' fontSize={4} lineHeight={5}>
        {description}
      </Paragraph>
    </Block>
  )
}

Hero.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

export default Hero
