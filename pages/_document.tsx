import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets, StylesProvider } from '@material-ui/styles';

export default class CustomDocument extends Document<any> {
  public render() {
    return (
      <Html lang="pt-br" style={{ overflowX: 'hidden' }}>
        <Head>
          <link rel="shortcut icon" href="/favicon.png"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;700&display=swap"
            rel="stylesheet"
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

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
CustomDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

// CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render

//   // Render app and page and get the context of the page with collected side effects.

//   const styledComponentsSheet = new ServerStyleSheet();
//   const materialSheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;

//   try {
//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: App => props =>
//           styledComponentsSheet.collectStyles(
//             materialSheets.collect(<App {...props} />),
//           ),
//       });
//     const initialProps = await Document.getInitialProps(ctx);
//     return {
//       ...initialProps,
//       styles: (
//         <>
//           <StylesProvider injectFirst={true}>
//             {initialProps.styles}
//             {materialSheets.getStyleElement()}
//             {styledComponentsSheet.getStyleElement()}
//           </StylesProvider>
//         </>
//       ),
//     };
//   } finally {
//     styledComponentsSheet.seal();
//   }
// };
