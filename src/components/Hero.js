import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { Navigation } from 'components/Navigation'
import { PageTitle } from 'components/PageTitle'
import { Block } from 'design-system/Block'

export const Hero = ({ description, navigation, title, ...restOfProps }) => {
  return (
    <Block px={14} py={16} {...pick(restOfProps)}>
      <PageTitle
        description={description}
        title={title}
      />
      {navigation && (
        <Navigation items={navigation} mt={6} />
      )}
    </Block>
  )
}

Hero.propTypes = {
  description: PropTypes.string,
  navigation: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  })),
  title: PropTypes.string
}
