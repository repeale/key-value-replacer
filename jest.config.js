module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['json', 'text', 'lcov', 'clover', 'cobertura'],
  moduleFileExtensions: ['ts', 'js'],
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: 'test',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
