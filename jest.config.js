module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testEnvironment: 'node',
  preset: 'react-native',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts, tsx}'],
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'tests', 'src'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    'tests/(.*)': '<rootDir>/tests/$1',
    '@src/(.*)': '<rootDir>/src/$1',
    '^axios$': require.resolve('axios'),
    '\\.svg': '<rootDir>/tests/presentation/mocks/svgMock.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)'
  ],
  setupFiles: ['<rootDir>/tests/setup.js']
}