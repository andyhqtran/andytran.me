import React from 'react'

import { Link } from 'components/Link'

export default {
  title: 'Core/Link',
  component: Link
}

export const preview = () => {
  return (
    <Link href='https://represent.io/andy'>
      Resume
    </Link>
  )
}
