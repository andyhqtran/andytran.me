import React from 'react'

import { PostCard } from 'components/PostCard'

export default {
  title: 'Components/PostCard',
  component: PostCard
}

export const preview = () => {
  return (
    <PostCard
      tags={[
        {
          description: 'This is a placeholder image',
          image: 'https://via.placeholder.com/112x112/1A62CC/1A62CC',
          title: 'Placeholder'
        }
      ]}
      excerpt='Mixmax is the #1 sales engagement platform for the complete sales cycle'
      title='Mixmax'
    />
  )
}
