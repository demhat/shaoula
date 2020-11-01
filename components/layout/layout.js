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
          <meta name="title" content="Shaoula" />
          <meta
            name="description"
            content="We provide the website services, SEO services, mobile app services, corporate identity services you need with the newest technologies of today's world."
          />
          <meta
            name="keywords"
            content="Shaoula, Shaoula Group, Shaoula Media, Shaoula Market, software, software solutions, freelance, website, mobile app, desktop app, HTML, CSS, Javascript, Python, PHP, Flutter, Android, iOS"
          />
          <meta name="author" content="Shaoula" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/*Facebook*/}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shaoula.com/" />
          <meta property="og:title" content="Shaoula" />
          <meta
            property="og:description"
            content="We provide the website services, SEO services, mobile app services, corporate identity services you need with the newest technologies of today's world."
          />
          <meta
            property="og:image"
            content="https://shoula.com/assets/shaoula/apple-icon.png"
          />

          {/*Twitter*/}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://shaoula.com/" />
          <meta property="twitter:title" content="Shaoula" />
          <meta
            property="twitter:description"
            content="We provide the website services, SEO services, mobile app services, corporate identity services you need with the newest technologies of today's world."
          />
          <meta
            property="twitter:image"
            content="https://shoula.com/assets/shaoula/apple-icon.png"
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
