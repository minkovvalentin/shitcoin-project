const path = require('path')

module.exports = {
  async redirects() {
    return [
      {
        source: '/coins',
        destination: '/coins/find',
        permanent: true,
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}