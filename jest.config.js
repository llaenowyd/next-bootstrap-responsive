module.exports = {
  verbose: true,
  setupFiles: ['./tests/setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
}
