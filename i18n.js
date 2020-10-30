import path from 'path'

const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['tr'],
  defaultNS: 'common',
  localeSubpaths: {
    tr: 'tr'
  },
  localePath: path.resolve('./public/static/locales'),
  serverLanguageDetection: true,
  browserLanguageDetection: true
})
