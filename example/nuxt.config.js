import siteModule from '..'

export default {
  // buildModules: [
  //   tailwindModule
  // ],
  modules: [
    siteModule
  ],

  site: {
    title: 'The Site Title',
    description: 'The site description goes here.',
    url: 'https://nuxt-site.netlify.app',
    analyticsId: 'abc123'
  }
  // tailwindcss: {
  //   exposeConfig: true
  // }
}
