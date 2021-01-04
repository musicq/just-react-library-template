const {jestConfigPath} = require('./build/paths')

module.exports = {
  roots: ['<rootDir>/src'],

  collectCoverageFrom: ['src/**/*.{ts|tsx}', '!src/**/*.d.ts'],

  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.+(ts|tsx)',
    '<rootDir>/src/**/?(*.)+(spec|test).+(ts|tsx)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(css|sass|scss)$': jestConfigPath('cssTransform.js')
  },
  moduleNameMapper: {
    '^.\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  }
}
