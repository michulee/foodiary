const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@features': path.resolve(__dirname, 'src/features'),
    '@groups': path.resolve(__dirname, 'src/groups'),
  })
);
