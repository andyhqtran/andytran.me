import propTypes from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import PropTypes from 'prop-types';
import Router from 'next/router';
import React from 'react';

import { Block } from 'design-system/Block';
import { Card } from 'design-system/Card';
import { Heading } from 'design-system/Heading';
import { Image } from 'design-system/Image';
import { Paragraph } from 'design-system/Paragraph';
import { Tag } from 'design-system/Tag';
import { Window } from 'design-system/Window';
import { Button } from 'primitives/Button';

export const PostCard = ({
  className,
  excerpt,
  image,
  slug,
  tags,
  title,
  ...restOfProps
}) => {
  return (
    <Card
      className={className}
      display='flex'
      justifyContent='space-between'
      overflow='hidden'
      {...pick(restOfProps)}
    >
      <Block
        alignItems='flex-start'
        display='flex'
        flexDirection='column'
        maxWidth={520}
        p={14}
      >
        <Block display='flex' mb={6}>
          {tags &&
            tags.map((tag, index) => (
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
        <Heading mb={4} variant='h2'>
          {title}
        </Heading>
        <Paragraph color='shade.5' mb={10}>
          {excerpt}
        </Paragraph>
        <Button
          onClick={() => {
            Router.push('/posts/[slug]', `/posts/${slug}`).then(() =>
              window.scrollTo(0, 0),
            );
          }}
        >
          View project &#10230;
        </Button>
      </Block>
      <Window position='relative' right={-20} top={56} width={620}>
        {image && <Image alt={title} src={image} />}
      </Window>
    </Card>
  );
};

PostCard.propTypes = {
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
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
};
