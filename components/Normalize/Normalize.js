import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import React from 'react'

const Normalize = () => {
  return (
    <Global
      styles={css(emotionNormalize)}
    />
  )
}

export default Normalize
