import Router, { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

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
      <Block display='grid' gridTemplateColumns='1fr 1fr 1fr' position='relative' maxWidth={1184} mx='auto' width='100%'>
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
              transition={{ duration: 0.2 }}
            >
              <ArrowLeftIcon />
            </IconButton>
          )}
        </AnimatePresence>
        <Logo title={title} />
        <Block
          alignItems='center'
          display='flex'
          justifyContent='center'
        >
          <AnimatePresence>
            {isPostsPage && (
              <Block
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                initial={{ y: 12, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Heading
                  color='shade.4'
                  mb={1}
                  textAlign='center'
                  variant='h7-alt'
                >
                  Case study
                </Heading>
                <Heading
                  color='shade.5'
                  textAlign='center'
                  variant='h6-alt'
                >
                  {postTitle}
                </Heading>
              </Block>
            )}
          </AnimatePresence>
        </Block>
        {!isPostsPage && (
          <SocialIcons />
        )}
        <AnimatePresence>
          {isPostsPage && (
            <IconButton
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              initial={{ x: -28, opacity: 0 }}
              key='next-arrow'
              onClick={() => Router.push('/')}
              position='absolute'
              right={-72}
              transition={{ duration: 0.2 }}
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
