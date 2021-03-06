const withTypescript = require('@zeit/next-typescript');
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

function moduleExists(name) {
  try {
    return require.resolve(name);
  } catch (error) {
    return false;
  }
}

const withOffline = moduleExists('next-offline') ? require('next-offline') : {};

const nextConfig = {
  target: 'serverless',
};

const swConfig = {
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

module.exports = withPlugins(
  [[withTypescript], [withCSS], [moduleExists('next-offline') ? withOffline : null, swConfig]],
  nextConfig
);
