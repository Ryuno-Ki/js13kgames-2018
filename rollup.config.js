import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import filesize from 'rollup-plugin-filesize'
import license from 'rollup-plugin-license'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import staticSite from 'rollup-plugin-static-site'
import { terser } from 'rollup-plugin-terser'

const LICENSE_HEADER = `
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
`

export default {
  input: './src/index.js',
  output: {
    dir: './dist',
    file: 'index.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: true
    }),
 
    commonjs({
      include: './node_modules/**',
      sourceMap: true,
    }),

    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    terser(),

    copy({
      './src/vendor/kontra.js': './dist/vendor/kontra.js',
      './src/sprites/assets/computer.sprite.png': './dist/assets/computer.sprite.png',
      './src/sprites/assets/Switch.png': './dist/assets/Switch.png'
    }),

    license({
      banner: LICENSE_HEADER
    }),

    filesize(),

    staticSite({
      dir: './dist',
      title: 'An Offline Life',
      moreScripts: [
        './vendor/kontra.js'
      ]
    })
  ]
}
