module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testEnvironment: 'node',
  transform: { '.+\\.ts$': 'ts-jest' },
  testMatch: ['<rootDir>/tests/**/*.(spec|test).ts'],
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },

  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts']
}
