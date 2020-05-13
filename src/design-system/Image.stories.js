import React from 'react'

import { Image } from 'design-system/Image'

export default {
  title: 'Design System/Image',
  component: Image
}

export const preview = () => {
  return (
    <Image
      alt='Placeholder image'
      src='https://via.placeholder.com/600x200/1A62CC/1A62CC'
    />
  )
}
