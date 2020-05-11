import { useRouter } from 'next/router'
import React from 'react'

import { Block } from 'components/Block'
import { IconButton } from 'components/IconButton'
import { CodePenIcon } from 'components/icons/CodePenIcon'
import { GithubIcon } from 'components/icons/GithubIcon'
import { LinkedInIcon } from 'components/icons/LinkedInIcon'
import { TwitterIcon } from 'components/icons/TwitterIcon'

const SocialIcons = () => {
  const router = useRouter()

  const codePenUrl = process.env.SOCIAL_CODEPEN_URL
  const githubUrl = process.env.SOCIAL_GITHUB_URL
  const linkedInUrl = process.env.SOCIAL_LINKEDIN_URL
  const twitterUrl = process.env.SOCIAL_TWITTER_URL

  return (
    <Block display='flex' justifyContent='flex-end'>
      {githubUrl && (
        <IconButton
          name='Github'
          onClick={() => {
            window.analytics.track('Social button clicked', {
              pathname: router.pathname,
              name: 'Github',
              url: githubUrl
            })

            window.location.href = githubUrl
          }}
        >
          <GithubIcon />
        </IconButton>
      )}
      {linkedInUrl && (
        <IconButton
          name='LinkedIn'
          onClick={() => {
            window.analytics.track('Social button clicked', {
              pathname: router.pathname,
              name: 'LinkedIn',
              url: linkedInUrl
            })

            window.location.href = linkedInUrl
          }}
        >
          <LinkedInIcon />
        </IconButton>
      )}
      {twitterUrl && (
        <IconButton
          name='Twitter'
          onClick={() => {
            window.analytics.track('Social button clicked', {
              pathname: router.pathname,
              name: 'Twitter',
              url: twitterUrl
            })

            window.location.href = twitterUrl
          }}
        >
          <TwitterIcon />
        </IconButton>
      )}
      {codePenUrl && (
        <IconButton
          name='CodePen'
          onClick={() => {
            window.analytics.track('Social button clicked', {
              pathname: router.pathname,
              name: 'CodePen',
              url: codePenUrl
            })

            window.location.href = codePenUrl
          }}
        >
          <CodePenIcon />
        </IconButton>
      )}
    </Block>
  )
}

export default SocialIcons
