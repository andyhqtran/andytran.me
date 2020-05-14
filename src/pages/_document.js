import * as snippet from '@segment/snippet'
import { extractCritical } from 'emotion-server'
import Document, { Head, Main, NextScript } from 'next/document'
import React, { Fragment } from 'react'

const {
  GA_TRACKING_ID,
  SEGMENT_WRITE_KEY,
  NODE_ENV = 'development'
} = process.env

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()

    const styles = extractCritical(page.html)

    return { ...page, ...styles }
  }

  renderSnippet () {
    const opts = {
      apiKey: SEGMENT_WRITE_KEY,
      page: true
    }

    if (NODE_ENV === 'development') {
      return snippet.max(opts)
    }

    return snippet.min(opts)
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          {GA_TRACKING_ID && (
            <Fragment>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `
                }}
              />
            </Fragment>
          )}
          {SEGMENT_WRITE_KEY && (
            <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
          )}
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <div id='notifications' />
          <NextScript />
        </body>
      </html>
    )
  }
}
