const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  await Promise.resolve()
  const SiteOptions = {
    ...this.options.site,
    ...moduleOptions
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
