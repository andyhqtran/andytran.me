import propTypes from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import PropTypes from 'prop-types';
import React from 'react';

import { Image } from 'design-system/Image';
import { Window } from 'design-system/Window';
import { Card } from 'primitives/Card';

export const PostFeaturedImage = ({
  className,
  image,
  title,
  ...restOfProps
}) => {
  return (
    <Card
      sx={{
        maxWidth: 1184,
        mt: 64,
        mx: 'auto',
        pl: 56,
        pr: 56,
        pt: 56,
        overflow: 'hidden',
      }}
      {...pick(restOfProps)}
    >
      <Window borderBottomLeftRadius={0} borderBottomRightRadius={0}>
        <Image title={title} src={image} width='100%' />
      </Window>
    </Card>
  );
};

PostFeaturedImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  ...propTypes.background,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
};
