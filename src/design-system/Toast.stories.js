import React from 'react'

import { Toast } from 'design-system/Toast'

export default {
  title: 'Design System/Toast',
  component: Toast
}

export const preview = () => {
  return (
    <Toast>
      This is a toast message. It should be appended to the top right of the page.
    </Toast>
  )
}
