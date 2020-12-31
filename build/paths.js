const path = require('path')

const makePath = (...root) => (...slices) => path.resolve(...root, ...slices)

const rootPath = makePath(__dirname, '..')
const examplePath = makePath(rootPath('example'))
const sourcePath = makePath(rootPath('src'))
const outputPath = makePath(rootPath('dist'))

module.exports = {
  rootPath,
  examplePath,
  sourcePath,
  outputPath
}
