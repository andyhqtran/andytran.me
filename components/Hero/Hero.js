import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { Block } from 'components/Block'
import { PageTitle } from 'components/PageTitle'

const Hero = ({ description, title, ...restOfProps }) => {
  return (
    <Block px={14} py={16} {...pick(restOfProps)}>
      <PageTitle
        description={description}
        title={title}
      />
    </Block>
  )
}

Hero.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

export default Hero
