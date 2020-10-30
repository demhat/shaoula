import App from 'next/app'
import React from 'react'
import 'toastr/toastr.scss'

import { appWithTranslation } from '../i18n'
import 'styles/variables.scss'
import 'styles/formalize.scss'
import 'styles/normalize.scss'
import 'styles/layout.scss'
import 'styles/styles.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp)
