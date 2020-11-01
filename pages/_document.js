import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { i18n } from "next-i18next";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <!-- Google Tag Manager -->
          <script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({"gtm.start":
            new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
            "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MN7DRSZ');
          </script>
          <!-- End Google Tag Manager -->
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/assets/shaoula/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/assets/shaoula/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/assets/shaoula/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/assets/shaoula/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/assets/shaoula/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/assets/shaoula/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/assets/shaoula/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/assets/shaoula/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/shaoula/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/shaoula/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/shaoula/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/assets/shaoula/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/shaoula/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/shaoula/manifest.json" />
          <meta name="msapplication-TileColor" content="#000" />
          <meta
            name="msapplication-TileImage"
            content="/assets/shaoula/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#000" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
        <!-- Google Tag Manager (noscript) -->
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN7DRSZ"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
      </Html>
    );
  }
}

export default MyDocument;
