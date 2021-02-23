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

  const setupSitemap = ({ sitemapOptions, routes }) => {
    const config = {
      hostname: SiteOptions.url,
      gzip: true,
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date()
      },
      routes
    }

    const configKeys = Object.keys(config)
    for (const key of configKeys) {
      sitemapOptions[key] = config[key]
    }
  }

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

  if (SiteOptions.analyticsId) {
    this.requireModule([
      '@nuxtjs/google-analytics',
      {
        id: SiteOptions.analyticsId
      }
    ])
  }

  this.requireModule('@nuxtjs/sitemap')

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'seo.js',
    options: SiteOptions
  })

  this.nuxt.hook('generate:done', ({ generatedRoutes, options }) => {
    setupSitemap({
      sitemapOptions: options.sitemap,
      routes: Array.from(generatedRoutes)
    })
  })
}

module.exports.meta = require('../package.json')
