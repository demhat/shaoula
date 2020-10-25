import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout/layout'
import Form from '../components/forms'
import Input from '../components/forms/input'
import Button from '../components/buttons'
import Textarea from '../components/forms/textarea'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Get Offer - Shaoula</title>
      </Head>
      <Form>
        <Input placeholder="Name" />
        <Input placeholder="Surname" />
        <Input placeholder="Email" />
        <Textarea placeholder="About your project"></Textarea>
        <Button>Get Offer</Button>
      </Form>
    </Layout>
  )
}

export default HomePage
