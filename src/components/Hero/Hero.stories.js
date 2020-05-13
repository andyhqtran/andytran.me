import React from 'react'

import { Hero } from 'components/Hero'

export default {
  title: 'Home page/Hero',
  component: Hero
}

export const preview = () => {
  return (
    <Hero
      description='UI Engineer at Mixmax'
      title='Andy Tran'
    />
  )
}
