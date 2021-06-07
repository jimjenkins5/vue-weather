/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli/quasar-conf-js

/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const { configure } = require('quasar/wrappers');

module.exports = configure(function() {
   return {
      supportTS: {
         tsCheckerConfig: {
            eslint: {
               enabled: true,
               files: './src/**/*.{ts,tsx,js,jsx,vue}',
            },
         },
      },

      boot: [
         'i18n',
      ],

      css: [
         'app.scss',
      ],

      extras: [
         'roboto-font',
         'material-icons',
      ],

      build: {
         vueRouterMode: 'history', // available values: 'hash', 'history'
      },

      devServer: {
         https: false,
         port: 8080,
         open: true, // opens browser window automatically
      },


      // https://v2.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
      pwa: {
         workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
         workboxOptions: {}, // only for GenerateSW

         manifest: {
            name: 'Vue Weather',
            /* eslint-disable-next-line camelcase */
            short_name: 'Vue Weather',
            description: 'Simple weather app written in Vue with Quazar.',
            display: 'standalone',
            orientation: 'portrait',
            /* eslint-disable-next-line camelcase */
            background_color: '#ffffff',
            /* eslint-disable-next-line camelcase */
            theme_color: '#027be3',
            icons: [
               {
                  src: 'icons/icon-128x128.png',
                  sizes: '128x128',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-256x256.png',
                  sizes: '256x256',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-384x384.png',
                  sizes: '384x384',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
               },
            ],
         },
      },
   };
});
