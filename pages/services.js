import React from 'react'
import Head from 'next/head'
import { withTranslation } from 'i18n'

import Layout from '../components/layout/layout'
import Card from '../components/cards/card'
import Col from '../components/layout/col'
import Flexbox from '../components/layout/flexbox'

function Services({ t }) {
  const services = [
    {
      title: t('Web'),
      description: t('Web Description')
    },
    {
      title: t('SEO'),
      description: t('SEO Description')
    },
    {
      title: t('MobileApp'),
      description: t('MobileApp Description')
    },
    {
      title: t('Corporate'),
      description: t('Corporate Description')
    }
  ]
  return (
    <Layout>
      <Head>
        <title>Services - Shaoula</title>
      </Head>
      <Flexbox>
        {services.map((service) => (
          <Col key={service.title} className="col-12 col-md-2 col-lg-3">
            <Card>
              <h4>{service.title}</h4>
              <code>{service.description}</code>
            </Card>
          </Col>
        ))}
      </Flexbox>
    </Layout>
  )
}

export default withTranslation('services')(Services)
