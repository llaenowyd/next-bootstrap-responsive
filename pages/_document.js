import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

// Provide HTML frame common to all components.
// Except viewport meta...

class MyDocument extends Document {
  // tbd: SSR props needed or not
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head lang="en">
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
