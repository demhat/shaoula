import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout/layout'
import Card from '../components/cards/card'
import Col from '../components/layout/col'
import Flexbox from '../components/layout/flexbox'

function HomePage() {
  const services = [
    {
      title: 'Web Services',
      description: 'We are making professional websites for you'
    },
    {
      title: 'SEO Services',
      description: 'We are making professional websites for you'
    },
    {
      title: 'Mobile App Services',
      description: 'We are making professional websites for you'
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
            {/*asd*/}
          </Col>
        ))}
      </Flexbox>
      {/*<Col>
        <Button href="/getOffer" button>
          Get Offer
        </Button>
      </Col>*/}
    </Layout>
  )
}

export default HomePage
