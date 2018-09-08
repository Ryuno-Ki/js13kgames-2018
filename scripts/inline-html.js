const fs = require('fs')
const path = require('path')
const pug = require('pug')
const minify = require('html-minifier').minify

const title = 'An Offline Life'  // TODO: Read from package.json
const pathToTemplate = path.join(__dirname, 'template.pug')
const pathToDestination = path.join(__dirname, '..', 'dist', 'index.html')
const pugOptions = {
  title,
}
const minifyOptions = {
  removeAttributeQuotes: true
}

const html = pug.renderFile(pathToTemplate, pugOptions)
const minifiedHtml = minify(html, minifyOptions)

fs.writeFileSync(pathToDestination, minifiedHtml)
