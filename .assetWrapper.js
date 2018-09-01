const path = require('path')
 
const PACKAGE = require(path.join(__dirname, 'package.json'))
const LICENSE_HEADER = `
/*
This file is part of An Offline Life.

An Offline Life is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

An Offline Life is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with An Offline Life.  If not, see <https://www.gnu.org/licenses/>. 
*/
`

const wrapBanner = async ({ name, bundler }) => {
  // name = app.ere76r5e76r5e76r.js
  const isJavaScriptFile = name.split('.').pop() === 'js'
  const isProductionBuild = bundler.options.production === true

  if (isJavaScriptFile && isProductionBuild) {
    return {
      header: LICENSE_HEADER,
      footer: ''
    }
  }
}
 
module.exports = wrapBanner
