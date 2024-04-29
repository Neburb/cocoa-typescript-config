export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    "node_modules/",
    'interfaces/*',
    'model/*'
  ],
  coverageProvider: 'v8',
  modulePathIgnorePatterns: ['dist', 'node_modules'],
  preset: 'ts-jest',
  testEnvironment: "node",
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  coverageReporters: ["clover", "lcov", "cobertura", "text"],
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90
    }
  },
  collectCoverageFrom: [ "src/**/*.{js,jsx,ts,tsx}" ],
  transformIgnorePatterns: ['node_modules/'],
  rootDir: "../.",
  roots: [
    "./"
  ],
}
