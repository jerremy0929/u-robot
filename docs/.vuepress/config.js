const { name, description } = require('../../package.json')

module.exports = {
  title: name,
  description: description,
  host: '0.0.0.0', // localhost
  port: 6008,
  dest: 'docs/dist',
}
