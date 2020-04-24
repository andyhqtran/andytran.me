import React from 'react'

import { Block } from 'components/Block'
import { StyledHeader } from './Header.styles'

const Header = () => {
  return (
    <StyledHeader>
      <Block maxWidth={1184} mx='auto' width='100%'>
        AT
      </Block>
    </StyledHeader>
  )
}

export default Header
