import React from 'react';

import { GithubIcon } from 'design-system/Icon';
import { IconButton } from 'design-system/IconButton';

export default {
  title: 'Design System/IconButton',
  component: IconButton,
};

export const preview = () => {
  return (
    <IconButton name='Github'>
      <GithubIcon />
    </IconButton>
  );
};
