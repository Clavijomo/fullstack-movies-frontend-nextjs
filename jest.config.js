const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    testMatch: [
        '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}',
        '<rootDir>/tests/**/*.test.{js,jsx,ts,tsx}',
    ],
    moduleDirectories: ['node_modules', '<rootDir>/src'],
};

module.exports = createJestConfig(customJestConfig);
