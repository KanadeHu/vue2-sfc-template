export default {
  roots: ['<rootDir>/__test__'],
  testMatch: [
    // 这里我们支持src目录里面增加一些单层，事实上我并不喜欢这样做
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    // 这里我习惯将单层文件统一放在test单独目录下，不在项目中使用，降低单测文件与业务组件模块混合在一起
    '<rootDir>/__test__/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  transform: {
    // 此处我们单测没有适用vue-jest方式，项目中我们江永tsx方式来开发，所以我们如果需要加入其它的内容
    // '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss|less)$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'jsx', 'json', 'node'],
  resetMocks: true,
}
