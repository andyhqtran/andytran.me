import React from 'react'

import { IconButton } from 'components/IconButton'
import { GithubIcon } from 'components/icons/GithubIcon'

export default {
  title: 'Core/IconButton',
  component: IconButton
}

export const preview = () => {
  return (
    <IconButton name='Github'>
      <GithubIcon />
    </IconButton>
  )
}
