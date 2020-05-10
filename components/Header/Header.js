import Router, { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'

import { Block } from 'components/Block'
import { Heading } from 'components/Heading'
import { IconButton } from 'components/IconButton'
import { ArrowLeftIcon } from 'components/icons/ArrowLeftIcon'
import { ArrowRightIcon } from 'components/icons/ArrowRightIcon'
import { CodePenIcon } from 'components/icons/CodePenIcon'
import { GithubIcon } from 'components/icons/GithubIcon'
import { LinkedInIcon } from 'components/icons/LinkedInIcon'
import { TwitterIcon } from 'components/icons/TwitterIcon'
import { Logo } from 'components/Logo'
import { getCodePenUrl, getGithubUrl, getLinkedInUrl, getTwitterUrl } from 'utils/environment'
import { StyledHeader } from './Header.styles'

const Header = ({ title }) => {
  const router = useRouter()

  const isPostsPage = router.pathname === '/posts/[slug]'

  const codePenUrl = getCodePenUrl()
  const githubUrl = getGithubUrl()
  const linkedInUrl = getLinkedInUrl()
  const twitterUrl = getTwitterUrl()

  return (
    <StyledHeader>
      <Block alignItems='center' display='flex' justifyContent='space-between' position='relative' maxWidth={1184} mx='auto' width='100%'>
        <AnimatePresence>
          {isPostsPage && (
            <IconButton
              key='previous-post'
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 28, opacity: 0 }}
              initial={{ x: 28, opacity: 0 }}
              left={-72}
              onClick={() => Router.push('/')}
              position='absolute'
              transition={{ duration: 0.4 }}
            >
              <ArrowLeftIcon />
            </IconButton>
          )}
        </AnimatePresence>
        <Logo justifySelf='left' title={title} />
        {isPostsPage && (
          <Block alignItems='center' display='flex' flexDirection='column'>
            <Heading color='shade.4' mb={1} variant='h7-alt'>
              Case study
            </Heading>
            <Heading color='shade.5' variant='h6-alt'>
              Mixmax
            </Heading>
          </Block>
        )}
        <Block display='flex'>
          {githubUrl && (
            <IconButton onClick={() => { window.location.href = githubUrl }}>
              <GithubIcon />
            </IconButton>
          )}
          {linkedInUrl && (
            <IconButton onClick={() => { window.location.href = linkedInUrl }}>
              <LinkedInIcon />
            </IconButton>
          )}
          {twitterUrl && (
            <IconButton onClick={() => { window.location.href = twitterUrl }}>
              <TwitterIcon />
            </IconButton>
          )}
          {codePenUrl && (
            <IconButton onClick={() => { window.location.href = codePenUrl }}>
              <CodePenIcon />
            </IconButton>
          )}
        </Block>
        {isPostsPage && (
          <IconButton
            ml='auto'
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -28, opacity: 0 }}
            initial={{ x: -28, opacity: 0 }}
            onClick={() => Router.push('/')}
            position='absolute'
            right={-72}
            transition={{ duration: 0.4 }}
          >
            <ArrowRightIcon />
          </IconButton>
        )}
      </Block>
    </StyledHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
