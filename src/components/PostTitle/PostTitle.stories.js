import React from 'react'

import { PostTitle } from 'components/PostTitle'

export default {
  title: 'Post/PostTitle',
  component: PostTitle
}

export const preview = () => {
  return (
    <PostTitle
      excerpt='Mixmax is the #1 sales engagement platform for the complete sales cycle'
      title='Mixmax'
    />
  )
}
