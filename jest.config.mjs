
const module = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'], // ✅ recomendable
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // ✅ transforma archivos JS y JSX con babel-jest
  },
  testMatch: ['**/__tests__/**/*.test.js?(x)'], // ✅ opcional: define patrón para tus tests
};

export default module;