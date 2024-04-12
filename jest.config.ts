export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: 'v8',
  modulePathIgnorePatterns: ['/dist', '/node_modules'],
  preset: 'ts-jest',
  testEnvironment: "node",
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  coverageReporters: ["clover"],

  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  roots: [
    "../test"
],
}
