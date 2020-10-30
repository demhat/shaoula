import React, { Component } from 'react'
import Head from 'next/head'

import Navbar from '../navigation'
import { withTranslation } from 'next-i18next'

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Shaoula</title>
          <meta name="description" content="Shaoula" />
          <meta
            name="keywords"
            content="Shaoula, Shaoula Group, Shaoula Media, Shaoula Market, software, software solutions, freelance, website, mobile app, desktop app, HTML, CSS, Javascript, Python, PHP, Flutter, Android, iOS"
          />
          <meta name="author" content="Shaoula" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Navbar />
        <main id="main">
          <div
            className={`container ${this.props?.centered ? 'centered' : ''}`}
          >
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}

export default withTranslation()(Layout)
