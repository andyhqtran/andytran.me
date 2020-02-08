import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
