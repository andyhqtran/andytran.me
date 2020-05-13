import React from 'react'

import { SocialIcons } from 'components/SocialIcons'

export default {
  title: 'Components/SocialIcons',
  component: SocialIcons
}

export const preview = () => {
  return (
    <SocialIcons
      icons={[
        {
          label: 'Github',
          url: 'https://github.com/andyhqtran'
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/andyhqtran/'
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/helloandytran'
        },
        {
          label: 'Github',
          url: 'https://codepen.io/andytran'
        }
      ]}
    />
  )
}
