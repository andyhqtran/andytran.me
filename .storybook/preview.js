import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import React, { Fragment } from 'react';

import { GlobalStyles } from 'components/GlobalStyles';
import { Inter } from 'components/Inter';
import { Normalize } from 'components/Normalize';
import { common } from 'themes/common';
import { light } from 'themes/light';

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
