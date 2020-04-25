const path = require('path');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');


const nextConfig = {
  // URLの末尾に「/」が必要な場合はtrueに変更
  exportTrailingSlash: true,
  exportPathMap: async () => {
    const paths = {
      '/': { page: '/' }
    };

    return paths;
  },
  env: {},
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    minimize: true,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  },
  webpack: config => {
    // polyfillの追加
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src')
    };
    config.module.rules.push(

    );

    return config;
  }
};

module.exports = withPlugins(
  [withCSS, withSass],
  nextConfig
);
