const path = require('path')
const pkg = require('./package')

module.exports = {
  entry: 'src/index.js',
  html: {
    title: pkg.productName,
    description: pkg.descrption,
    template: path.join(__dirname, 'index.ejs')
  },
  postcss: {
    plugins: [
      // Your postcss plugins
    ]
  }<% if (karma || pwa) { %>,
  presets: [
    <% if (karma) { %>require('poi-preset-karma')({
      files: 'src/**/*.test.js'
    })<% } %><% if (pwa) { %><% if (karma){ %>,<% } %>
    require('poi-preset-offline')({
      pwa: './src/pwa.js', // Path to pwa runtime entry
      pluginOptions: {} // Additional options for offline-plugin
    })<% } %>
  ]<% } %>
}