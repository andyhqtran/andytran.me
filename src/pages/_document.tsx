import * as snippet from '@segment/snippet';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React, { Fragment } from 'react';

import { getCssString } from '~/stitches.config';

const {
  GA_TRACKING_ID,
  SEGMENT_WRITE_KEY,
  NODE_ENV = 'development',
} = process.env;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    try {
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {/* Temporary fix for FOUC - https://github.com/modulz/stitches/issues/404#issuecomment-783400106 */}
            <style
              dangerouslySetInnerHTML={{
                __html: 'body { opacity: 0; visibility: hidden; }',
              }}
            />
            <noscript>
              <style
                dangerouslySetInnerHTML={{
                  __html: 'body { opacity: 1; visibility: visible; }',
                }}
              />
            </noscript>

            {/* Stitches CSS */}
            <style
              id='stitches'
              dangerouslySetInnerHTML={{ __html: getCssString() }}
            />
          </>
        ),
      };
    } finally {
    }
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
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='/css/normalize.css' rel='stylesheet' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap'
            rel='stylesheet'
          />
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
        </Head>
        <body>
          <script src='/js/noflash.js' />
          <Main />
          <div id='notifications' />
          <NextScript />
        </body>
      </Html>
    );
  }
}
