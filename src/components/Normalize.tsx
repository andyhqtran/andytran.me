import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import React from 'react';

export const Normalize = () => {
  return <Global styles={css(emotionNormalize)} />;
};
