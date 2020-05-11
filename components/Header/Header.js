import Router, { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'

import { Block } from 'components/Block'
import { Heading } from 'components/Heading'
import { IconButton } from 'components/IconButton'
import { ArrowLeftIcon } from 'components/icons/ArrowLeftIcon'
import { ArrowRightIcon } from 'components/icons/ArrowRightIcon'
import { Logo } from 'components/Logo'
import { SocialIcons } from 'components/SocialIcons'
import { StyledHeader } from './Header.styles'

const Header = ({ postTitle, title }) => {
  const router = useRouter()

  const isPostsPage = router.pathname === '/posts/[slug]'

  return (
    <StyledHeader key='header'>
      <Block display='grid' gridTemplateColumns={isPostsPage ? '1fr 1fr 1fr' : '1fr 1fr'} position='relative' maxWidth={1184} mx='auto' width='100%'>
        <AnimatePresence>
          {isPostsPage && (
            <IconButton
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 28, opacity: 0 }}
              initial={{ x: 28, opacity: 0 }}
              key='previous-arrow'
              left={-72}
              onClick={() => Router.push('/')}
              position='absolute'
              transition={{ duration: 0.4 }}
            >
              <ArrowLeftIcon />
            </IconButton>
          )}
        </AnimatePresence>
        <Logo title={title} />
        {isPostsPage && (
          <Block alignItems='center' display='flex' flexDirection='column'>
            <Heading color='shade.4' mb={1} variant='h7-alt'>
              Case study
            </Heading>
            <Heading color='shade.5' variant='h6-alt'>
              {postTitle}
            </Heading>
          </Block>
        )}
        {!isPostsPage && (
          <SocialIcons />
        )}
        <AnimatePresence>
          {isPostsPage && (
            <IconButton
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -28, opacity: 0 }}
              initial={{ x: -28, opacity: 0 }}
              key='next-arrow'
              onClick={() => Router.push('/')}
              position='absolute'
              right={-72}
              transition={{ duration: 0.4 }}
            >
              <ArrowRightIcon />
            </IconButton>
          )}
        </AnimatePresence>
      </Block>
    </StyledHeader>
  )
}

Header.propTypes = {
  postTitle: PropTypes.string,
  title: PropTypes.string
}

export default Header
