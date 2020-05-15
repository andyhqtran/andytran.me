import React from 'react'

import { Navigation } from 'components/Navigation'

export default {
  title: 'Components/Navigation',
  component: Navigation
}

export const preview = () => {
  return (
    <Navigation
      items={[
        {
          label: 'Email',
          url: 'mailto:hello@andytran.me'
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/andyhqtran/'
        }
      ]}
    />
  )
}
