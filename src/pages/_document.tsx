import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Etiquetas meta globales */}
        <meta name="description" content="Mi portfolio personal" />
        <meta name="author" content="Tu Nombre" />
        <meta name="keywords" content="portfolio, desarrollador, react, nextjs" />

        {/* Favicon */}
        <link rel="icon" href="/icon.ico" />

        {/* Meta Open Graph para redes sociales */}
        <meta property="og:title" content="Mi Portfolio" />
        <meta property="og:description" content="Bienvenido a mi web personal hecha con Next.js" />
        <meta property="og:image" content={'/assets/images/preview.png'} />
        <meta property="og:type" content="website" />

        {/* Meta para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mi Portfolio" />
        <meta name="twitter:description" content="Bienvenido a mi web personal hecha con Next.js" />
        <meta name="twitter:image" content="/assets/images/preview.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
