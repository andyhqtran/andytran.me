import React from 'react';

import { Paragraph } from 'design-system/Paragraph';

export default {
  title: 'Design System/Paragraph',
  component: Paragraph,
};

export const preview = () => {
  return (
    <Paragraph>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since
      the 1500s, when an unknown printer took a galley of type and scrambled it
      to make a type specimen book.
    </Paragraph>
  );
};
