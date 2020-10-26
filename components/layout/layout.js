import React, { Component } from 'react'
import Head from 'next/head'

import Navbar from '../navigation'

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Shaoula</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Navbar />
        <div className={`container ${this.props?.centered ? 'centered' : ''}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
