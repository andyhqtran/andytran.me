import propTypes from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import { Block } from 'design-system/Block';
import { Heading } from 'design-system/Heading';
import { Paragraph } from 'design-system/Paragraph';

export const PageTitle = ({
  className,
  description,
  title,
  ...restOfProps
}) => {
  return (
    <Block className={className} {...pick(restOfProps)}>
      <Head>
        <title>{title}</title>
      </Head>
      <Heading mb={4} variant='h1'>
        {title}
      </Heading>
      <Paragraph color='shade.5' fontSize={4} lineHeight={5}>
        {description}
      </Paragraph>
    </Block>
  );
};

PageTitle.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
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
