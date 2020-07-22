const {
  override,
  addWebpackAlias,
} = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@design-lib': path.resolve(__dirname, './src/components'),
    '@ui-v1-components': path.resolve(__dirname, './src/ui-v1/components'),
  }),
);
