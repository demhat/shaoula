import React from 'react'
import 'node_modules/alertifyjs/build/css/alertify.min.css'

import 'styles/variables.scss'
import 'styles/formalize.scss'
import 'styles/normalize.scss'
import 'styles/layout.scss'
import 'styles/styles.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp