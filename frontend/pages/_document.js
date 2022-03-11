import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      
      <Html lang="en">
            <Head>
      <meta name="description" content="Valen's Homepage" />
      <meta name="author" content="Valen's Homepage" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="icon" href="/img/logo-tab.png" />


      </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}