const path = require('path')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = { tr: 'tr' }

module.exports = {
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en'
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
