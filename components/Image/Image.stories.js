import React from 'react'

import { Image } from 'components/Image'

export default {
  title: 'Core/Image',
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
