import { extractCritical } from '@emotion/server';
import * as snippet from '@segment/snippet';
import Document, { Head, Main, NextScript } from 'next/document';
import React, { Fragment } from 'react';

const {
  GA_TRACKING_ID,
  SEGMENT_WRITE_KEY,
  NODE_ENV = 'development',
} = process.env;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();

    const styles = extractCritical(page.html);

    return { ...page, ...styles };
  }

  renderSnippet() {
    const opts = {
      apiKey: SEGMENT_WRITE_KEY,
      page: true,
    };

    if (NODE_ENV === 'development') {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          {GA_TRACKING_ID && (
            <Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </Fragment>
          )}
          {SEGMENT_WRITE_KEY && (
            <script
              dangerouslySetInnerHTML={{ __html: this.renderSnippet() }}
            />
          )}
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <style>
          {`
            body.light-mode {
              --color-inverse: #FFFFFF;
              --color-tint-0: rgba(0, 0, 0, 0);
              --color-tint-1: rgba(0, 0, 0, 0.04);
              --color-tint-2: rgba(0, 0, 0, 0.08);
              --color-tint-3: rgba(0, 0, 0, 0.16);
              --color-tint-4: rgba(0, 0, 0, 0.24);
              --color-tint-5: rgba(0, 0, 0, 0.4);
              --color-tint-6: rgba(0, 0, 0, 0.64);
              --color-tint-7: rgba(0, 0, 0, 0.84);
              --color-tint-8: rgba(0, 0, 0, 1);
            }
            body.dark-mode {
              --color-inverse: #101419;
              --color-tint-0: rgba(255, 255, 255, 0);
              --color-tint-1: rgba(255, 255, 255, 0.04);
              --color-tint-2: rgba(255, 255, 255, 0.08);
              --color-tint-3: rgba(255, 255, 255, 0.16);
              --color-tint-4: rgba(255, 255, 255, 0.24);
              --color-tint-5: rgba(255, 255, 255, 0.4);
              --color-tint-6: rgba(255, 255, 255, 0.64);
              --color-tint-7: rgba(255, 255, 255, 0.84);
              --color-tint-8: rgba(255, 255, 255, 1);
            }
          `}
        </style>
        <body>
          <script src='/js/noflash.js' />
          <Main />
          <div id='notifications' />
          <NextScript />
        </body>
      </html>
    );
  }
}
