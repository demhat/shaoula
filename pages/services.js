import React from 'react'
import Head from 'next/head'
import { withTranslation } from 'i18n'

import { SERVICES } from '../constants'

import Layout from '../components/layout/layout'
import Card from '../components/cards/card'
import Col from '../components/layout/col'
import Flexbox from '../components/layout/flexbox'

function Services({ t }) {
  return (
    <Layout>
      <Flexbox>
        {SERVICES.map((service) => (
          <Col key={service.title} className="col-12 col-md-2 col-lg-3">
            <Card>
              <h4>{t(service.title)}</h4>
              <code>{t(service.description)}</code>
            </Card>
          </Col>
        ))}
      </Flexbox>
    </Layout>
  )
}

export default withTranslation('services')(Services)
