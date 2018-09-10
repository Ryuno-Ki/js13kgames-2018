import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import license from 'rollup-plugin-license'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'

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
    dir: './tmp',
    file: 'game.js',
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
      './src/game.css': './tmp/game.css',
      './src/vendor/kontra.js': './tmp/kontra.js',
      './src/assets/dial-up.mp3': './dist/dial-up.mp3',
      './src/assets/tileset.png': './dist/tileset.png'
    }),

    license({
      banner: LICENSE_HEADER
    }),

    visualizer()
  ]
}
