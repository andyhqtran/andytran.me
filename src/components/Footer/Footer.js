import PropTypes from 'prop-types'
import React from 'react'

import { Block } from 'components/Block'
import { Navigation } from 'components/Navigation'
import { StyledFooter } from './Footer.styles'

const Footer = ({ navigation, title }) => {
  return (
    <StyledFooter>
      <Block>
        Copyright &copy; {title}
      </Block>
      <Navigation color='inherit' fontSize={1} items={navigation} />
    </StyledFooter>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  navigation: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  })),
  title: PropTypes.string
}

export default Footer
