import * as snippet from '@segment/snippet'
import { extractCritical } from 'emotion-server'
import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

const {
  SEGMENT_WRITE_KEY,
  NODE_ENV = 'development'
} = process.env

class MyDocument extends Document {
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
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
