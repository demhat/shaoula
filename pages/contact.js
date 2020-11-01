import React, { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import toastr from 'toastr'
import { withTranslation } from 'next-i18next'

import Layout from '../components/layout/layout'
import Form from '../components/forms'
import Input from '../components/forms/input'
import Button from '../components/buttons'
import Textarea from '../components/forms/textarea'

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-bottom-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
}

function Contact({ t }) {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const isEnabled =
    name.length > 0 && surname.length > 0 && email.length > 0 && text.length > 0

  const handleSubmit = (e) => {
    const formData = { name, surname, email, text }
    e.preventDefault()
    axios.post('/api/contact', formData).then(
      (res) => {
        if (res.status === 200) {
          setText('')
          toastr.success(t('We got your mail!'))
        }
      },
      (e) => {
        console.log(e)
      }
    )
  }
  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder={t('Name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder={t('Email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder={t('Message')}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit} disabled={!isEnabled}>
          {t('forms:Send message')}
        </Button>
      </Form>
    </Layout>
  )
}

export default withTranslation('forms')(Contact)
