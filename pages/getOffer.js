import React, { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import alertify from 'alertifyjs'

import Layout from '../components/layout/layout'
import Form from '../components/forms'
import Input from '../components/forms/input'
import Button from '../components/buttons'
import Textarea from '../components/forms/textarea'

function HomePage() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    const formData = { name, surname, email, text }
    e.preventDefault()
    console.log(formData)
    axios.post('/api/contact', formData).then(
      (res) => {
        if (res.status === 200) {
          alertify.success('We got your mail!')
        }
      },
      (e) => {
        console.log(e)
      }
    )
  }
  return (
    <Layout>
      <Head>
        <title>Get Offer - Shaoula</title>
      </Head>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="About your project"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Get Offer
        </Button>
      </Form>
    </Layout>
  )
}

export default HomePage
