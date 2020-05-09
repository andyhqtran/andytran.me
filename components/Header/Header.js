import PropTypes from 'prop-types'
import React from 'react'

import { Block } from 'components/Block'
import { IconButton } from 'components/IconButton'
import { CodePenIcon } from 'components/icons/CodePenIcon'
import { GithubIcon } from 'components/icons/GithubIcon'
import { LinkedInIcon } from 'components/icons/LinkedInIcon'
import { TwitterIcon } from 'components/icons/TwitterIcon'
import { Logo } from 'components/Logo'
import { StyledHeader } from './Header.styles'

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <Block alignItems='center' display='flex' justifyContent='space-between' maxWidth={1184} mx='auto' width='100%'>
        <Logo title={title} />
        <Block display='flex'>
          <IconButton>
            <GithubIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <CodePenIcon />
          </IconButton>
        </Block>
      </Block>
    </StyledHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
