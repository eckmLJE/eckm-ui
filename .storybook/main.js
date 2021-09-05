const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '~': resolve('../src'),
    }
    return config
  },
  typescript: {
    reactDocgenTypescriptOptions: {
      propFilter: (prop) =>
        (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true) &&
        excludedProps.indexOf(prop.name) < 0,
    },
  },
}

function resolve(dir) {
  return path.join(__dirname, dir)
}
