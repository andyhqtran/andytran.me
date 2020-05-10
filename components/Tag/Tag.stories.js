import React from 'react'

import { Tag } from 'components/Tag'

export default {
  title: 'Core/Tag',
  component: Tag
}

export const preview = () => {
  return (
    <Tag
      description='This is a placeholder image'
      image='https://via.placeholder.com/112x112/1A62CC/1A62CC'
      title='Placeholder'
    />
  )
}
