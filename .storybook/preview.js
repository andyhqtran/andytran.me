import { withA11y } from '@storybook/addon-a11y'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider } from 'emotion-theming'
import React, { Fragment } from 'react'

import { GlobalStyles } from 'components/GlobalStyles'
import { Inter } from 'components/Inter'
import { Normalize } from 'components/Normalize'
import { common, light } from 'themes'

addParameters({
  options: {
    showRoots: true
  }
})

/**
 * Wraps stories in the Emotion theme wrapper
 */
addDecorator((stories) => {
  return (
      <ThemeProvider
        theme={{
          ...common,
          ...light
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
})

addDecorator(withA11y)
