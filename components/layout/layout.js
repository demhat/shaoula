import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { withTranslation } from 'next-i18next'

import { NAVS } from 'constants/index'

import Navbar from '../navigation'

const Layout = (props) => {
  const path = useRouter().pathname
  const nav = NAVS.find((navs) => navs.href === path)
  return (
    <div>
      <Head>
        <title>{nav.title}</title>
        <meta name="title" content={nav.title} />
        <meta
          name="description"
          content="We provide the website services, SEO services, mobile app services, corporate identity services you need with the newest technologies of today's world."
        />
        <meta
          name="keywords"
          content="Shaoula, Shaoula Group, Shaoula Media, Shaoula Market, software, software solutions, freelance, website, mobile app, desktop app, HTML, CSS, Javascript, Python, PHP, Flutter, Android, iOS"
        />
        <meta name="author" content="Shaoula Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/*Facebook*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://shaoula.com/${nav.href}`} />
        <meta property="og:title" content={nav.title} />
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
        <meta
          property="twitter:url"
          content={`https://shaoula.com/${nav.href}`}
        />
        <meta property="twitter:title" content={nav.title} />
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
        <div className={`container ${props?.centered ? 'centered' : ''}`}>
          {props.children}
        </div>
      </main>
    </div>
  )
}

export default withTranslation()(Layout)
