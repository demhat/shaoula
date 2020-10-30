import React from 'react'
import Typist from 'react-typist'
import { withTranslation } from '../i18n'

import Layout from 'components/layout/layout'
import Cmd from '../components/terminal/cmd'
import Shaoula from '../components/shaoula'
import Response from '../components/terminal/response'

const HomePage = ({ t }) => {
  return (
    <Layout>
      <Typist cursor={{ show: false }}>
        <Cmd>print(" Shaoula ")</Cmd>
        <Shaoula size={4} style={{ maxWidth: '100%' }} />
        <Cmd>aboutUs()</Cmd>
        <Response>{t('aboutUs')}</Response>
      </Typist>
    </Layout>
  )
}

export default withTranslation()(HomePage)
