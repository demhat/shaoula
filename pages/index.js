import React from 'react'
import Typist from 'react-typist'

import Layout from 'components/layout/layout'
import Cmd from '../components/terminal/cmd'
import Shaoula from '../components/shaoula'
import Response from '../components/terminal/response'

function HomePage() {
  return (
    <Layout>
      <Typist cursor={{ show: false }}>
        <Cmd>print(" Shaoula ")</Cmd>
        <Shaoula size={4} style={{ maxWidth: '100%' }} />
        <Cmd>aboutUs()</Cmd>
        <Response>Something about us</Response>
      </Typist>
    </Layout>
  )
}

export default HomePage
