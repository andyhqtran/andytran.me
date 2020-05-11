import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'

import { Block } from 'components/Block'
import { Heading } from 'components/Heading'
import { Paragraph } from 'components/Paragraph'
import { Tag } from 'components/Tag'

const PostTitle = ({
  className,
  excerpt,
  tags,
  title,
  ...restOfProps
}) => {
  return (
    <Block
      className={className}
      maxWidth={1072}
      mx='auto'
      pt={20}
      {...pick(restOfProps)}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Block display='flex' mb={6}>
        {tags && tags.map((tag, index) => (
          <Tag
            description={tag.description}
            image={tag.image}
            key={tag.id}
            mr={tags.length !== index && 4}
            name={tag.name}
            slug={tag.slug}
          />
        ))}
      </Block>
      <Heading maxWidth={704} mb={4} variant='h1'>
        {title}
      </Heading>
      <Paragraph color='description' fontSize={4} lineHeight={5} maxWidth={704}>
        {excerpt}
      </Paragraph>
    </Block>
  )
}

PostTitle.propTypes = {
  className: PropTypes.string,
  excerpt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    visibility: PropTypes.string
  })),
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
