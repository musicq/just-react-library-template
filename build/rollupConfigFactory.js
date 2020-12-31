import typescript from '@rollup/plugin-typescript'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'

const {outputPath, sourcePath} = require('./paths')

export const rollupConfigFactory = env => {
  const isProd = env === 'production'

  return {
    input: sourcePath('index.ts'),
    output: [
      {
        file: outputPath('main.js'),
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      typescript(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      postcss({
        // extract: true,
        autoModules: true,
        minimize: isProd,
        plugins: [require('autoprefixer')]
      }),
      isProd && terser()
    ].filter(Boolean)
  }
}