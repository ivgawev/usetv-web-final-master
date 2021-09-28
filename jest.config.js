module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],

  transform: { '.+\\.ts$': 'ts-jest' },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },

  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],

  projects: [
    {
      displayName: 'dom',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/tests/**/*.test.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/src/main/config/tests/setup.ts']
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/tests/**/*.spec.{ts,tsx}']
    }
  ]
}
