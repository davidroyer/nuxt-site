export default async function ({ router, store }) {
  await Promise.resolve()
  const options = JSON.parse('<%= serialize(options) %>')
  console.log(`🚀 ~ file: plugin.js ~ line 4 ~ options`, options)

  // eslint-disable-next-line no-console
  console.log('FROM PLUGIN')
}
