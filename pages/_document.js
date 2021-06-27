import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

// Provide HTML frame common to all components.
// Except viewport meta and title...

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
          <meta name="description" content="Example NextJS App" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/icons/favicon.ico" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <meta name="theme-color" content="#317EFB" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap"
          />
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
