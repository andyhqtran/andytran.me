import propTypes from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import { Block } from 'design-system/Block';
import { Heading } from 'design-system/Heading';
import { Tag } from 'components/Tag';
import { Text } from 'primitives/Text';

export const PostTitle = ({
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
      <Block display='flex' mb={24}>
        {tags &&
          tags.map((tag, index) => (
            <Tag
              description={tag.description}
              image={tag.image}
              key={tag.id}
              mr={tags.length !== index && 16}
              name={tag.name}
              slug={tag.slug}
            />
          ))}
      </Block>
      <Heading maxWidth={704} mb={16} variant='h1'>
        {title}
      </Heading>
      <Text
        sx={{
          maxWidth: 704,
          color: 'shade.5',
          fontSize: 24,
          lineHeight: '34px',
        }}
      >
        {excerpt}
      </Text>
    </Block>
  );
};

PostTitle.propTypes = {
  className: PropTypes.string,
  excerpt: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
      visibility: PropTypes.string,
    }),
  ),
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
  ...propTypes.typography,
};
