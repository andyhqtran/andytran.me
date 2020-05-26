import Router, { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'

import { SocialIcons } from 'components/SocialIcons'
import { Block } from 'design-system/Block'
import { Heading } from 'design-system/Heading'
import { ArrowLeftIcon, ArrowRightIcon } from 'design-system/Icon'
import { IconButton } from 'design-system/IconButton'
import { Logo } from 'design-system/Logo'
import { StyledHeader } from './Header.styles'

export const Header = ({ nextPost, postTitle, prevPost, socialIcons, title }) => {
  const router = useRouter()

  const isPostsPage = router && router.pathname === '/posts/[slug]'

  const hasPrevPost = prevPost && prevPost.constructor === Object && Object.keys(prevPost).length !== 0
  const hasNextPost = nextPost && nextPost.constructor === Object && Object.keys(nextPost).length !== 0

  return (
    <StyledHeader key='header'>
      <Block display='grid' gridTemplateColumns='1fr 1fr 1fr' position='relative' maxWidth={1184} mx='auto' width='100%'>
        <AnimatePresence>
          {hasPrevPost && isPostsPage && (
            <IconButton
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 28, opacity: 0 }}
              initial={{ x: 28, opacity: 0 }}
              key='previous-arrow'
              left={-72}
              onClick={() => {
                Router
                  .push('/posts/[slug]', `/posts/${prevPost.slug}`)
                  .then(() => window.scrollTo(0, 0))
              }}
              position='absolute'
              transition={{ duration: 0.2 }}
            >
              <ArrowLeftIcon />
            </IconButton>
          )}
        </AnimatePresence>
        <Logo
          css={{
            cursor: 'pointer'
          }}
          onClick={() => Router.push('/').then(() => window.scrollTo(0, 0))}
          title={title}
        />
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
          <SocialIcons icons={socialIcons} justifyContent='flex-end' />
        )}
        <AnimatePresence>
          {hasNextPost && isPostsPage && (
            <IconButton
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              initial={{ x: -40, opacity: 0 }}
              key='next-arrow'
              onClick={() => {
                Router
                  .push('/posts/[slug]', `/posts/${nextPost.slug}`)
                  .then(() => window.scrollTo(0, 0))
              }}
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
  nextPost: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string
  }),
  postTitle: PropTypes.string,
  prevPost: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string
  }),
  socialIcons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOf([
      'CodePen',
      'Github',
      'LinkedIn',
      'Twitter'
    ]),
    url: PropTypes.string
  })),
  title: PropTypes.string
}
