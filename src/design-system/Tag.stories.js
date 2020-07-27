import React from 'react';

import { Block } from 'design-system/Block';
import { Tag } from 'design-system/Tag';

export default {
  title: 'Design System/Tag',
  component: Tag,
};

export const preview = () => {
  return (
    <Tag
      description="This is a placeholder image"
      image="https://via.placeholder.com/112x112/1A62CC/1A62CC"
      title="Placeholder"
    />
  );
};
export const multiple = () => {
  return (
    <Block display="flex">
      <Tag
        description="This is a placeholder image"
        image="https://via.placeholder.com/112x112/1A62CC/1A62CC"
        mr={4}
        title="Placeholder"
      />
      <Tag
        description="This is a placeholder image"
        image="https://via.placeholder.com/112x112/F92C8B/F92C8B"
        mr={4}
        title="Placeholder"
      />
      <Tag
        description="This is a placeholder image"
        image="https://via.placeholder.com/112x112/2D9CDB/2D9CDB"
        title="Placeholder"
      />
    </Block>
  );
};
