const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['tr'],
  defaultNS: 'common',
  localeSubpaths: {
    tr: 'tr'
  },
  localePath: 'public/static/locales',
  serverLanguageDetection: false,
  browserLanguageDetection: true
})
