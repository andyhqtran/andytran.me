import React from 'react'

import { Blockquote } from 'components/Blockquote'

export default {
  title: 'Core/Blockquote',
  component: Blockquote
}

export const preview = () => {
  return (
    <Blockquote>
      This is an example of a blockquote
    </Blockquote>
  )
}
