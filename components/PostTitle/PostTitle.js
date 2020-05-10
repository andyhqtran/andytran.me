import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'

import { Block } from 'components/Block'
import { Heading } from 'components/Heading'
import { Paragraph } from 'components/Paragraph'

const PostTitle = ({
  className,
  excerpt,
  title,
  ...restOfProps
}) => {
  return (
    <Block
      className={className}
      {...pick(restOfProps)}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Heading maxWidth={736} mb={4} variant='h1'>
        {title}
      </Heading>
      <Paragraph color='description' fontSize={4} lineHeight={5} maxWidth={736}>
        {excerpt}
      </Paragraph>
    </Block>
  )
}

PostTitle.propTypes = {
  className: PropTypes.string,
  excerpt: PropTypes.string,
  title: PropTypes.string,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography
}

export default PostTitle
