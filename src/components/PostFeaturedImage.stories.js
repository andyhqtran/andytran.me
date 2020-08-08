import React from 'react';

import { PostFeaturedImage } from 'components/PostFeaturedImage';

export default {
  title: 'Components/PostFeaturedImage',
  component: PostFeaturedImage,
};

export const preview = () => {
  return (
    <PostFeaturedImage
      image='https://via.placeholder.com/600x200/1A62CC/1A62CC'
      title='Placeholder image'
    />
  );
};
