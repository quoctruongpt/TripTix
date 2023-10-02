module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@navigation': './src/navigation',
            '@store': './src/store',
            '@utils': './src/utils',
            '@screens': './src/screens',
            '@storage': './src/storage',
          }
        }
      ]
    ]
  };
};
