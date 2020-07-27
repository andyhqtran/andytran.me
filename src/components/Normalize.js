import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import React from 'react';

export const Normalize = () => {
  return <Global styles={css(emotionNormalize)} />;
};
