import React from 'react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'

import { Header } from 'components/Header'

export default {
  title: 'Components/Header',
  component: Header
}

export const preview = () => {
  return (
    <Header />
  )
}

export const postPage = () => {
  return (
    <RouterContext.Provider value={{ pathname: '/posts/storybook' }}>
      <Header />
    </RouterContext.Provider>
  )
}
