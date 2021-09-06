const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '~': resolve('../src'),
    }
    return config
  },
}

function resolve(dir) {
  return path.join(__dirname, dir)
}
