/* eslint-disable no-console */
const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const NuxtOptions = this.nuxt.options
  // console.log('🚀 ~ file: module.js ~ line 5 ~ NuxtOptions', NuxtOptions)

  const SiteOptions = {
    useNetlifyUrl: true,
    ...this.options.site,
    ...moduleOptions
  }

  if (SiteOptions.useNetlifyUrl) {
    const { port, host } = NuxtOptions.server

    SiteOptions.url =
      process.env.NODE_ENV === 'production'
        ? process.env.DEPLOY_PRIME_URL
        : `http://${host}:${port}`
  }

  this.options.sitemap = {}

  this.requireModule([
    'nuxt-social-meta',
    {
      title: SiteOptions.title || '',
      description: SiteOptions.description || '',
      url: SiteOptions.url || '',
      img: `${SiteOptions.url}/share.png`,
      twitter: '@DavidRoyer_'
    }
  ])

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-site.js',
    options: SiteOptions
  })
}

module.exports.meta = require('../package.json')

// url:
// process.env.NODE_ENV === 'production'
//   ? netlifySiteUrl
//   : 'http://localhost:3000',
