import { ThemeProvider } from '@emotion/react';
import { addDecorator } from '@storybook/react';
import React, { Fragment } from 'react';

import { GlobalStyles } from '../src/components/GlobalStyles';
import { Inter } from '../src/components/Inter';
import { Normalize } from '../src/components/Normalize';
import { common } from '../src/themes/common';
import { light } from '../src/themes/light';

/**
 * Wraps stories in the Emotion theme wrapper
 */
addDecorator((stories) => {
  return (
    <ThemeProvider
      theme={{
        ...common,
        ...light,
      }}
    >
      <Fragment>
        <Normalize />
        <GlobalStyles />
        <Inter />
        {stories()}
      </Fragment>
    </ThemeProvider>
  );
});
