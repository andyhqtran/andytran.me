import React from 'react'

import { GithubIcon } from 'components/icons/GithubIcon'
import { IconButton } from 'design-system/IconButton'

export default {
  title: 'Design System/IconButton',
  component: IconButton
}

export const preview = () => {
  return (
    <IconButton name='Github'>
      <GithubIcon />
    </IconButton>
  )
}
