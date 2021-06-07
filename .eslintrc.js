const { resolve } = require('path');
module.exports = {
   extends: [
      '@silvermine/eslint-config/node',
   ],

   rules: {
      strict: 'off',
      'no-process-env': 'off',
   },

   overrides: [
      {
         files: ['**/*.vue'],
         parser: require.resolve('vue-eslint-parser'),
         parserOptions: {
            parser: require.resolve('@typescript-eslint/parser'),
            ecmaVersion: 2020,
            sourceType: 'module',
         },
         rules: {
            // The 'no-unused-vars' rules does not work with type definitions in .vue
            // files.
            'no-unused-vars': 'off',
         },
      },
  ],

   globals: {
      ga: 'readonly', // Google Analytics
      cordova: 'readonly',
      __statics: 'readonly',
      __QUASAR_SSR__: 'readonly',
      __QUASAR_SSR_SERVER__: 'readonly',
      __QUASAR_SSR_CLIENT__: 'readonly',
      __QUASAR_SSR_PWA__: 'readonly',
      process: 'readonly',
      Capacitor: 'readonly',
      chrome: 'readonly',
   },
}
