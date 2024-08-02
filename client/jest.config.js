/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mock__/styleMock.js",
  },
};
