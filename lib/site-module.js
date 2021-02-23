const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  await Promise.resolve()
  const options = {
    ...this.options.site,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-site.js',
    options
  })
}

module.exports.meta = require('../package.json')
