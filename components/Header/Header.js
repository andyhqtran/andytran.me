import React from 'react'

import { Block } from 'components/Block'
import { Logo } from 'components/Logo'
import { StyledHeader } from './Header.styles'

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <Block maxWidth={1184} mx='auto' width='100%'>
        <Logo title={title} />
      </Block>
    </StyledHeader>
  )
}

export default Header
