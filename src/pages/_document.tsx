import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Etiquetas meta globales */}
          <meta name="description" content="Mi portfolio personal" />
          <meta name="author" content="Antonio Rodríguez González" />
          <meta
            name="keywords"
            content="portfolio, desarrollador, react, nextjs, typescript, web, móvil"
          />

          {/* Favicon */}
          <link rel="icon" href="/icon.ico" />

          {/* Meta Open Graph para redes sociales */}
          <meta property="og:title" content="Mi Portfolio" />
          <meta
            property="og:description"
            content="Bienvenido a mi web personal hecha con Next.js"
          />
          <meta property="og:type" content="website" />

          {/* Meta para Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Mi Portfolio" />
          <meta
            name="twitter:description"
            content="Bienvenido a mi web personal hecha con Next.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
