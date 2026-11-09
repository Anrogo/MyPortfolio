import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
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
        <meta property="og:description" content="Bienvenido a mi web personal hecha con Next.js" />
        <meta property="og:type" content="website" />

        {/* Meta para Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mi Portfolio" />
        <meta name="twitter:description" content="Bienvenido a mi web personal hecha con Next.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
